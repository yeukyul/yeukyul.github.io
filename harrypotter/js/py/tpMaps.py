import pygame
import sys
import math
import copy
import random

class gameMap(object):
    def __init__(self,viewRow=13,viewCol=6,width=1000,height=500):
        self.mapInit()
        self.playerD = 800
        self.cellSize = [3,5,16*2]
        self.stepSize = 100
        self.width = width
        self.height = height
        self.vp1X = self.width/2
        self.vp1Y = self.height/2 -500
        self.actCubeSize = 125 
        self.theta = math.pi/3
        self.deltaChange = 1
        self.viewRow = viewRow
        self.viewCol = viewCol  
        self.initCubeHeight = 100 
        self.initcolorSet()
        self.randomGetPosition()
        self.randomGetwaterColor()
        self.resize()
        self.resize()
        
    def resize(self):
        self.viewRow -=1
        self.actCubeSize /=0.5
        self.vp1Y +=100
        self.initCubeHeight /= 0.4
        self.playerD /=2
                 
    def perspectiveresacle(self):
        self.theta -=0.01
        self.deltaChange += 1
        self.vp1Y -=self.deltaChange**2
        self.playerD +=self.deltaChange**2
        self.initCubeHeight = math.sin(self.theta)*self.actCubeSize
        
    def initcolorSet(self):
        color1=(76,176,52)
        color2=(129,195,71)
        color3=(1,147,83)
        color4=(217,235,177)
        color5=(149,208,221)
        color6=(253,219,1)
        self.colorSet = {'frontTree':color1,'lightTree':color2,
                         'darkTree': color3,'road':color4,
                         'background':color5,'water':color6 }    
        
    def getScale(self,row):
        if (row==self.viewRow):
            self.scale = 1
        elif (self.playerD+self.stepSize*(self.viewRow-row)==0):
            self.scale = 1000 #?
        else:
            self.scale=self.playerD/(self.playerD+self.stepSize*(self.viewRow-row))
        return self.scale   
    
    
    def getGridPosition(self,row,col):
        x1=self.vp1X-(self.viewCol-col+1/2)*self.actCubeSize*self.getScale(row)
        y1=self.vp1Y+(self.height-self.vp1Y)*self.getScale(row)
        self.point1=(x1,y1)
        x2=self.vp1X-(self.viewCol-col-1/2)*self.actCubeSize*self.getScale(row)
        y2=self.vp1Y+(self.height-self.vp1Y)*self.getScale(row)
        self.point2=(x2,y2)
        x3=self.vp1X-(self.viewCol-col+1/2)*self.actCubeSize*self.getScale(row+1)
        y3=self.vp1Y+(self.height-self.vp1Y)*self.getScale(row+1)
        self.point3=(x3,y3)
        x4=self.vp1X-(self.viewCol-col-1/2)*self.actCubeSize*self.getScale(row+1)
        y4=self.vp1Y+(self.height-self.vp1Y)*self.getScale(row+1)
        self.point4=(x4,y4)
        x5=x1
        y5=y2-self.initCubeHeight*self.getScale(row)
        self.point5=(x5,y5)
        x6=x2
        y6=y2-self.initCubeHeight*self.getScale(row)
        self.point6=(x6,y6)
        x7=x3
        y7=y4-self.initCubeHeight*self.getScale(row+1)
        self.point7=(x7,y7)
        x8=x4
        y8=y4-self.initCubeHeight*self.getScale(row+1)
        self.point8=(x8,y8)
        
    def drawGround(self,surface):
        for row in range(len(self.mapWall)):
            for col in range(len(self.mapWall[0])):
                if (self.mapRoad[row][col]==1
                and (self.playerD+self.stepSize*(self.viewRow-row-1)>0)):
                    self.getGridPosition(row,col)
                    self.drawGroundCell(surface,self.point1,self.point2,
                        self.point3,self.point4)
                if (self.mapRoad[row][col]==2
                and (self.playerD+self.stepSize*(self.viewRow-row-1)>0)):
                    self.getGridPosition(row,col)
                    self.randomGetPosition()
                    self.randomGetwaterColor()
                    self.drawWaterCell(surface,self.point1,self.point2,
                        self.point3,self.point4) 
                    
    def drawGroundCell(self,surface,x1,x2,x3,x4):
        Color1 = (217,206,193)
        Color2 = (205,193,181)
        Color3 = (194,181,167)
        Color4 = (182,171,152)
        Color5 = (170,155,137)
        Color6 = (155,143,121)
        lineW = abs(x4[0]-x3[0])/30
        p1=self.getGroundCellPositon(x1,x2,x3,x4,0,1)
        p2=self.getGroundCellPositon(x1,x2,x3,x4,1,0)
        p3=self.getGroundCellPositon(x1,x2,x3,x4,9,0)
        p4=self.getGroundCellPositon(x1,x2,x3,x4,10,1)
        p5=self.getGroundCellPositon(x1,x2,x3,x4,10,9)
        p6=self.getGroundCellPositon(x1,x2,x3,x4,9,10)
        p7=self.getGroundCellPositon(x1,x2,x3,x4,1,9)
        p8=self.getGroundCellPositon(x1,x2,x3,x4,0,8)
        
        p9=self.getGroundCellPositon(x1,x2,x3,x4,1,2)
        p10=self.getGroundCellPositon(x1,x2,x3,x4,2,1)
        p11=self.getGroundCellPositon(x1,x2,x3,x4,6,1)
        p12=self.getGroundCellPositon(x1,x2,x3,x4,7,2)
        p13=self.getGroundCellPositon(x1,x2,x3,x4,7,7)
        p14=self.getGroundCellPositon(x1,x2,x3,x4,6,8)
        p15=self.getGroundCellPositon(x1,x2,x3,x4,2,8)
        p16=self.getGroundCellPositon(x1,x2,x3,x4,1,7)
        
        pygame.draw.polygon(surface,Color2,[p1,p2,p10,p9])
        pygame.draw.polygon(surface,Color4,[p2,p3,p11,p10])
        pygame.draw.polygon(surface,Color1,[p8,p1,p9,p16])
        pygame.draw.polygon(surface,Color3,[p9,p10,p11,p12,p13,p14,p15,p16])
        pygame.draw.polygon(surface,Color2,[p7,p8,p16,p15])
        pygame.draw.polygon(surface,Color5,[p12,p11,p3,p4])
        pygame.draw.polygon(surface,Color6,[p13,p12,p4,p5])
        pygame.draw.polygon(surface,Color4,[p15,p14,p6,p7])
        pygame.draw.polygon(surface,Color5,[p14,p13,p5,p6])
        
    def getGroundCellPositon(self,x1,x2,x3,x4,row,col):
        ny1 = x1[1]+row/10*(x3[1]-x1[1])
        ny2 = x2[1]+row/10*(x4[1]-x2[1])
        nx1 = x1[0]+row/10*(x3[0]-x1[0])
        nx2 = x2[0]+row/10*(x4[0]-x2[0])
        x = nx1+col/9*(nx2-nx1)
        y = ny1+col/9*(ny2-ny1)
        return (x,y)        
    
    def mapInit(self):
        self.mapWall = [[3,1,1,1,1,1,1,1,1,1,1,1,3],
                        [3,1,0,0,0,0,5,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,1,0,0,0,0,0,0,0,1,1,3],
                        [3,1,1,1,1,1,4,1,1,1,1,1,3],
                        [3,0,1,0,1,0,0,0,1,0,1,0,3],
                        [3,0,0,0,0,0,0,0,0,0,0,0,3],
                        [3,3,3,3,3,3,0,3,3,3,3,3,3],]
        
        self.mapRoad = [[0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,2,0,2,0,1,1,1,0,2,0,2,0],
                        [0,2,2,2,2,2,1,2,2,2,2,2,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],]
    
    def drawWaterCell(self,surface,x1,x2,x3,x4):
        lineW = abs(x4[0]-x3[0])/30
        
        p1=self.getWaterCellPositon(x1,x2,x3,x4,self.p1Posi[0],self.p1Posi[1])
        p2=self.getWaterCellPositon(x1,x2,x3,x4,self.p2Posi[0],self.p2Posi[1])
        p3=self.getWaterCellPositon(x1,x2,x3,x4,self.p3Posi[0],self.p3Posi[1])
        p4=self.getWaterCellPositon(x1,x2,x3,x4,self.p4Posi[0],self.p4Posi[1])
        p5=self.getWaterCellPositon(x1,x2,x3,x4,self.p5Posi[0],self.p5Posi[1])
        p6=self.getWaterCellPositon(x1,x2,x3,x4,self.p6Posi[0],self.p6Posi[1])
        p7=self.getWaterCellPositon(x1,x2,x3,x4,self.p7Posi[0],self.p7Posi[1])
        p8=self.getWaterCellPositon(x1,x2,x3,x4,self.p8Posi[0],self.p8Posi[1])
        p9=self.getWaterCellPositon(x1,x2,x3,x4,self.p9Posi[0],self.p9Posi[1])
        
        p10=self.getWaterCellPositon(x1,x2,x3,x4,5,7)
        p11=self.getWaterCellPositon(x1,x2,x3,x4,2,7)
        
        p12=self.getWaterCellPositon(x1,x2,x3,x4,0,0)
        p13=self.getWaterCellPositon(x1,x2,x3,x4,0,7)
        p14=self.getWaterCellPositon(x1,x2,x3,x4,10,0)
        p15=self.getWaterCellPositon(x1,x2,x3,x4,10,7)
        
        pygame.draw.polygon(surface,self.A1Colr,[p12,p13,p2,p1])
        pygame.draw.polygon(surface,self.A2Colr,[p12,p1,p3,p9])
        pygame.draw.polygon(surface,self.A3Colr,[p1,p2,p4,p3])
        pygame.draw.polygon(surface,self.A4Colr,[p2,p13,p11,p4])
        pygame.draw.polygon(surface,self.A5Colr,[p9,p3,p5,p14])
        pygame.draw.polygon(surface,self.A6Colr,[p3,p4,p6,p5])
        pygame.draw.polygon(surface,self.A7Colr,[p4,p11,p10,p6])
        pygame.draw.polygon(surface,self.A8Colr,[p5,p8,p7,p14])
        pygame.draw.polygon(surface,self.A9Colr,[p5,p6,p8])
        pygame.draw.polygon(surface,self.A10Colr,[p6,p10,p15,p8])
        pygame.draw.polygon(surface,self.A11Colr,[p7,p8,p15])
        
    def randomGetwaterColor(self):
        color1 = (254,254,254)
        color2 = (169,219,246)
        color3 = (9,157,221)
        color4 = (55,99,172)
        color5 = (157,215,201)
        color6 = (7,174,164)
        waterColorSet1 =  [#(254,254,254),
                          (201,233,230),
                          (174,221,227),(145,215,227)]#light
        waterColorSet2 =  [(76,198,222),(1,158,209),
                           (4,132,195),(0,113,173)]#mid
        waterColorSet3 =  [(16,77,150),(37,62,142),
                           (48,48,136)]#dark
        self.A1Colr = random.choice(waterColorSet2)  
        self.A2Colr = random.choice(waterColorSet3)
        self.A3Colr = random.choice(waterColorSet1)
        self.A4Colr = random.choice(waterColorSet2)
        self.A5Colr = random.choice(waterColorSet2)
        self.A6Colr = random.choice(waterColorSet3)
        self.A7Colr = random.choice(waterColorSet2)
        self.A8Colr = random.choice(waterColorSet2)
        self.A9Colr = random.choice(waterColorSet1)
        self.A10Colr = random.choice(waterColorSet2) 
        self.A11Colr = random.choice(waterColorSet3)          
        
    def randomGetPosition(self):
        self.p1Posi = random.choice([[1,1],[1,2],[1,3],
                                    [2,1],[2,2],[2,3],
                                    [3,1],[3,2],[3,3]])
        self.p2Posi = random.choice([#[0,4],[0,5],[0,6],
                                    [1,4],[1,5],[1,6],
                                    [2,4],[2,5],[2,6]])
        self.p3Posi = random.choice([[4,1],[4,2],[4,3],
                                    [5,1],[5,2],[5,3],
                                    [6,1],[6,2],[6,2]])
        self.p4Posi = random.choice([[3,4],[3,5],[3,6],
                                    [4,4],[4,5],[4,6],
                                    [5,4],[5,5],[5,6]])
        self.p5Posi = random.choice([[7,1],[7,2],[7,3],
                                    [8,1],[8,2],[8,3],
                                    [9,1],[9,2],[9,3]])
        self.p6Posi = random.choice([[6,4],[6,5],[6,6],
                                    [7,4],[7,5],[7,6],
                                    [8,4],[8,5],[8,6]])
        self.p7Posi = random.choice([[10,1],[10,2],[10,3]])
        self.p8Posi = random.choice([[9,4],[9,5],[9,6]])
        self.p9Posi = random.choice([[5,0],[6,0],[7,0],
                                    [8,0],[9,0],[1,0],
                                    [2,0],[3,0],[4,0]])
        
    def getWaterCellPositon(self,x1,x2,x3,x4,row,col):
        ny1 = x1[1]+row/10*(x3[1]-x1[1])
        ny2 = x2[1]+row/10*(x4[1]-x2[1])
        nx1 = x1[0]+row/10*(x3[0]-x1[0])
        nx2 = x2[0]+row/10*(x4[0]-x2[0])
        x = nx1+col/7*(nx2-nx1)
        y = ny1+col/7*(ny2-ny1)
        return (x,y) 
            
    def drawStoneWallLight(self,surface,x1,x2,x3,x4):
        fillColor = (255,132,91)
        lineColor = (232,99,100)
        lightC = (245,164,111)
        self.drawStoneWallCell1(surface,x1,x2,x3,x4,fillColor,lineColor,lightC)
        self.drawStoneWallCell2(surface,x1,x2,x3,x4,fillColor,lineColor,lightC)
    
    def drawStoneWallDark(self,surface,x1,x2,x3,x4):
        fillColor = (210,71,68)
        lineColor = (196,61,59)
        lightC = (254,113,104)
        self.drawStoneWallCell1(surface,x1,x2,x3,x4,fillColor,lineColor,lightC)
        self.drawStoneWallCell2(surface,x1,x2,x3,x4,fillColor,lineColor,lightC)
    
    def drawStoneWallMid(self,surface,x1,x2,x3,x4):
        fillColor = (252,111,104)
        lineColor = (216,81,78)
        lightC = (245,155,129)
        self.drawStoneWallCell1(surface,x1,x2,x3,x4,fillColor,lineColor,lightC)
        self.drawStoneWallCell2(surface,x1,x2,x3,x4,fillColor,lineColor,lightC)
    
    def drawStoneWallCell1(self,surface,x1,x2,x3,x4,color1,color2,color3):
        #vertical line
        fillcolor = color1
        pygame.draw.polygon(surface,fillcolor,[x1,x2,x4,x3])
        oultlinecolor = color2
        highlightColor = (209,196,185)
        lightColor = color3
        linewidth = math.ceil((x4[0]-x3[0])/50) #60 is arbitary,can set to any size
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,0,0)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,0,4)
        pygame.draw.line(surface,lightColor,(px0,py0+linewidth),
                         (px1-linewidth,py1+linewidth),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,1,0)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,1,4)
        pygame.draw.line(surface,lightColor,(px0,py0+linewidth),
                         (px1-linewidth,py1+linewidth),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,2,0)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,2,4)
        pygame.draw.line(surface,lightColor,(px0,py0+linewidth),
                         (px1-linewidth,py1+linewidth),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,3,0)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,3,4)
        pygame.draw.line(surface,lightColor,(px0,py0+linewidth),
                         (px1-linewidth,py1+linewidth),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,4,0)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,4,4)
        #surface.create_line(px0,py0,px1-linewidth,py1,fill=lightColor,width=linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),
                         (px1-linewidth,py1),linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,0,2)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,1,2)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        #dotPosition = self.stoneWallDecoCellPosiMid(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,1,1)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,2,1)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiMid(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,1,3)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,2,3)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiMid(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,2,2)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,3,2)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiMid(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,3,1)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,4,1)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiMid(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,3,3)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,4,3)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiMid(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        
        
        
    def drawStoneWallCell2(self,surface,x1,x2,x3,x4,color1,color2,color3):
        #horizontal line
        fillcolor = color1
        oultlinecolor = color2
        lightColor = color3
        linewidth = math.ceil((x4[0]-x3[0])/50) #60 is arbitary,can set to any size
        
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,0,0)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,1,0)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiRight(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,0,4)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,1,4)
        #surface.create_line(px0+linewidth,py0,px1+linewidth,py1,fill=lightColor,width=linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0-linewidth,py0),
                         (px1-linewidth,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiLeft(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,2,0)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,3,0)
        pygame.draw.line(surface,lightColor,(px0+linewidth,py0),
                         (px1+linewidth,py1),linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0,py0),(px1,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiRight(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
        (px0,py0)=self.getCellPositon(x1,x2,x3,x4,2,4)
        (px1,py1)=self.getCellPositon(x1,x2,x3,x4,3,4)
        #surface.create_line(px0+linewidth,py0,px1+linewidth,py1,fill=lightColor,width=linewidth)
        pygame.draw.line(surface,oultlinecolor,(px0-linewidth,py0),
                         (px1-linewidth,py1),linewidth)
        dotPosition = self.stoneWallDecoCellPosiLeft(px1,py1,linewidth)
        #surface.create_polygon(dotPosition,fill=oultlinecolor,width=linewidth)
                
    def stoneWallDecoCellPosiMid(self,x,y,w):
        return ((x+w,y-2*w),(x+w,y-w),(x+2*w,y-w),(x+2*w,y),
                (x-2*w,y),(x-2*w,y-w),(x-w,y-w),(x-w,y-2*w))
                
    def stoneWallDecoCellPosiLeft(self,x,y,w):
        return ((x,y-2*w),(x,y),(x-2*w,y),(x-2*w,y-w),(x-w,y-w),(x-w,y-2*w))
        
    def stoneWallDecoCellPosiRight(self,x,y,w):
        return ((x+w,y-2*w),(x+w,y-w),(x+2*w,y-w),(x+2*w,y),(x,y),(x,y-2*w))
       
    def getCellPositon(self,x1,x2,x3,x4,row,col):
        ny1 = x1[1]+row/4*(x3[1]-x1[1])
        ny2 = x2[1]+row/4*(x4[1]-x2[1])
        nx1 = x1[0]+row/4*(x3[0]-x1[0])
        nx2 = x2[0]+row/4*(x4[0]-x2[0])
        x = nx1+col/4*(nx2-nx1)
        y = ny1+col/4*(ny2-ny1)
        return (x,y)    
    
