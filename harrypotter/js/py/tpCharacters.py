import pygame
import sys
import math
import copy
import random

class Character(object):
    def __init__(self,x,y,direction,pixelSize=2,withHat = True):
        self.characterX = x
        self.characterY = y
        self.characterDir = direction
        self.pixelSize = pixelSize
        self.walkCount = 1
        self.roleRow = 10
        self.roleCol = 6
        self.hat = withHat

# =============================================================================
# HARRY POTTER
# =============================================================================

class HarryPotter(Character):
    def getRealPosition(self,points):
        if (self.characterDir=='left'):
            dx = -1
        else: 
            dx = 1  
        RealPoint = []
        for point in points:
            RealPoint.append((self.characterX+point[0]*self.pixelSize*dx,
                              self.characterY+point[1]*self.pixelSize))
        return RealPoint  

# side points ##############################################################

## shared parts points -----------------------------------------------------
    
    def HeadPoints(self):
        headPointsDict = {}
        hatLightPoints = [[-4,-25],[4,-19],[3,-18],[0,-17],[-2,-16]]
        hatDarkPoints = [[-2,-16],[-4,-15],[-4,-25]]
        hatHairPoints = [[4,-19],[3,-18],[0,-17],[-4,-15],[-4,-13],[-2,-11],
                       [-2,-12],[-1,-13],[-2,-14],[-1,-15],[0,-14],[3,-17],
                       [4,-17],[5,-18]]
        hairPoints = [[3,-20],[-2,-20],[-4,-18],[-4,-15],[-4,-13],[-2,-11],
                    [-2,-12],[-1,-13],[-2,-14],[-1,-15],[0,-15],[0,-14],
                    [3,-17],[4,-17],[5,-18]]
        facePoints = [[-2,-12],[-1,-13],[-2,-14],[-1,-15],[0,-15],
                    [0,-14],[3,-17],[4,-17],[5,-18],[5,-13],[3,-12]]  
        cheekPoints = [[1.5,-13.5],[2.5,-13.5],[3,-13.16],[3,-12.83],
                       [2.5,-12.5],[1.5,-12.5],[1,-12.83],[1,-13.16]]
        leftEyePoints = [[2.5,-14.85],[3.3,-15.15],[3.3,-15],[3.2,-14.95],
                        [3.2,-14.2],[2.9,-14.1],[2.9,-14.8],[2.5,-14.7]]
        rightEyePoints = [[4.2,-15.55],[5,-15.85],[5,-15.7],[4.9,-15.65],
                          [4.9,-14.9],[4.6,-14.8],[4.6,-15.5],[4.2,-15.4]]        
        
        glassesPoints = [[0,-14],[2,-14],[2,-13],[2.4,-12.7],[3.1,-12.9],
                         [3.5,-13.2],[3.5,-15.1],[4,-15.3],[4,-14.1],[4.2,-13.8],
                         [5,-14],[5.4,-14.4],[5.4,-16.5],[5,-17],[4.2,-16.7],
                         [4,-16],[4,-15.3],[3.5,-15.1],[3.5,-15.3],[3.1,-15.8],
                         [2.4,-15.5],[2,-14.8],[2,-14]]
        scarPoints = [[3.1,-16.9],[2.9,-16.5],[3.3,-16.5],[3.1,-16.1]]
        
        headPointsDict['hatLight']= self.getRealPosition(hatLightPoints)
        headPointsDict['hatDark']= self.getRealPosition(hatDarkPoints)
        headPointsDict['hatHair']= self.getRealPosition(hatHairPoints)
        headPointsDict['hair']= self.getRealPosition(hairPoints)
        headPointsDict['face']= self.getRealPosition(facePoints)
        headPointsDict['scar']= self.getRealPosition(scarPoints) 
        headPointsDict['cheek']= self.getRealPosition(cheekPoints) 
        headPointsDict['glasses']= self.getRealPosition(glassesPoints)
        headPointsDict['leftEye']= self.getRealPosition(leftEyePoints) 
        headPointsDict['rightEye']= self.getRealPosition(rightEyePoints) 
        return headPointsDict
        
    def stableBody1Points(self):
        bodyPointsDict = {}
        redScarfPoints1 = [[-2,-12],[-1,-12],[-1,-11],[-2,-11]]
        redScarfPoints2 = [[0,-12],[1,-12],[1,-11],[0,-11]]
        redScarfPoints3 = [[2,-12],[3,-12],[3,-11],[2,-11]]
        yellowScarfPoints1 = [[1,-12],[2,-12],[2,-11],[1,-11]]
        yellowScarfPoints2 = [[-1,-12],[0,-12],[0,-11],[-1,-11]]
        yellowScarfPoints3 = [[3,-12],[4,-12.5],[4,-11.5],[3,-11]]
        LightCloakPoints = [[-1,-3],[0,-11],[2,-11],[3,-9],[2,-5]]
        collarPoints = [[2,-11],[3,-11],[4,-9],[2,-5],[3,-9]]
        clothesPoints = [[3,-11],[4,-11.5],[4,-6.5],[3,-6],[2.5,-6],[4,-9]] 
        handPoints = [[0,-6],[1,-6],[1,-5],[0,-5]]
        
        bodyPointsDict['r1'] = self.getRealPosition(redScarfPoints1)
        bodyPointsDict['r2'] = self.getRealPosition(redScarfPoints2)
        bodyPointsDict['r3'] = self.getRealPosition(redScarfPoints3)
        bodyPointsDict['y1'] = self.getRealPosition(yellowScarfPoints1)
        bodyPointsDict['y2'] = self.getRealPosition(yellowScarfPoints2)
        bodyPointsDict['y3'] = self.getRealPosition(yellowScarfPoints3)
       
        bodyPointsDict['LCloak'] = self.getRealPosition(LightCloakPoints)
        bodyPointsDict['collar'] = self.getRealPosition(collarPoints)               
        bodyPointsDict['clothes'] = self.getRealPosition(clothesPoints) 
        bodyPointsDict['hand'] = self.getRealPosition(handPoints)  
        
        return bodyPointsDict
    
    def stableBody2Points(self): # upper body that do not move 
        bodyPointsDict = {}
        redScarfPoints1 = [[-2,-12],[-1,-12],[-1,-11],[-2,-11]]
        redScarfPoints2 = [[0,-12],[1,-12],[1,-11],[0,-11]]
        redScarfPoints3 = [[2,-12],[3,-12],[3,-11],[2,-11]]
        yellowScarfPoints1 = [[1,-12],[2,-12],[2,-11],[1,-11]]
        yellowScarfPoints2 = [[-1,-12],[0,-12],[0,-11],[-1,-11]]
        yellowScarfPoints3 = [[3,-12],[4,-12.5],[4,-11.5],[3,-11]]
        LightCloakPoints = [[-1,-3],[0,-11],[2,-11],[3,-9],[2,-5]]
        collarPoints = [[2,-11],[3,-11],[4,-9],[2,-5],[3,-9]]
        clothesPoints = [[3,-11],[4,-11.5],[4,-6.5],[3,-6],[2.5,-6],[4,-9]] 
    
        bodyPointsDict['r1'] = self.getRealPosition(redScarfPoints1)
        bodyPointsDict['r2'] = self.getRealPosition(redScarfPoints2)
        bodyPointsDict['r3'] = self.getRealPosition(redScarfPoints3)
        bodyPointsDict['y1'] = self.getRealPosition(yellowScarfPoints1)
        bodyPointsDict['y2'] = self.getRealPosition(yellowScarfPoints2)
        bodyPointsDict['y3'] = self.getRealPosition(yellowScarfPoints3)
       
        bodyPointsDict['LCloak'] = self.getRealPosition(LightCloakPoints)
        bodyPointsDict['collar'] = self.getRealPosition(collarPoints)               
        bodyPointsDict['clothes'] = self.getRealPosition(clothesPoints)                
        return bodyPointsDict

## different parts for gestures ---------------------------------------------
    
    def standBodyPoints(self):
        bodyPointsDict = {}        
        DarkCloakPoints = [[-2,-11],[-3,-1],[-1,-3],[0,-11]]
        bodyPointsDict['staDCloak'] = self.getRealPosition(DarkCloakPoints)
        standLeg1Points = [[1,-6],[3,-6],[3,-2],[1,-2]]
        standLeg2Points = [[-1,-3],[1,-5.5],[1,-1],[-1,-1]]  
        shoe1Points = [[3,-2],[3.5,-2],[4,-1.5],[4,-1],[1,-1],[1,-2]] 
        shoe2Points = [[1,-1],[1.5,-1],[2,-0.5],[2,0],[-1,0],[-1,-1]] 
        
        yellowScarf1Points = [[-2,-11],[-1,-11],[-1,-10],[-2,-10]]
        redScarf1Points = [[-2,-10],[-1,-10],[-1,-9],[-2,-9]]
        yellowScarf2Points = [[-2,-9],[-1,-9],[-1,-8],[-2,-8]]
        redScarf2Points = [[-2,-8],[-1,-8],[-1,-7],[-2,-7]]          
        bodyPointsDict['staLeg1'] = self.getRealPosition(standLeg1Points)
        bodyPointsDict['staLeg2'] = self.getRealPosition(standLeg2Points)
        
        bodyPointsDict['rs1'] = self.getRealPosition(redScarf1Points)
        bodyPointsDict['rs2'] = self.getRealPosition(redScarf2Points)
        bodyPointsDict['ys1'] = self.getRealPosition(yellowScarf1Points)
        bodyPointsDict['ys2'] = self.getRealPosition(yellowScarf2Points) 
        bodyPointsDict['shoe1'] = self.getRealPosition(shoe1Points) 
        bodyPointsDict['shoe2'] = self.getRealPosition(shoe2Points) 
        return bodyPointsDict
        

    def walk1BodyPoints(self):
        bodyPointsDict = {}        
        walkDarkCloakPoints = [[-2,-11],[-3,-3],[-4,-2],[-2,-2],[-1,-3],[0,-11]]
        walkLeg2Points = [[-0.9,-5],[1.1,-5],[-0.4,-1.2],[-2,-2.2]]
        walkLeg1Points = [[1,-6],[3,-6],[3.8,-2],[1.8,-2]]
        shoe1Points = [[3.8,-2],[4.3,-2.2],[4.7,-1.7],[4,-1],[1.8,-1],[1.8,-2]] 
        shoe2Points = [[-2,-2.2],[-0.4,-1.2],[0.1,-1],[0.1,-0.2],[-0.9,-0.2],[-2.6,-1.1]]         
        handPoints = [[2,-6],[3,-6],[3,-5],[2,-5]]  
        yellowScarf1Points = [[-3,-11],[-2,-11],[-2,-10],[-3,-10]]
        redScarf1Points = [[-4,-10],[-3,-10],[-3,-9],[-4,-9]]
        redScarf2Points = [[-5,-9],[-4,-9],[-4,-8],[-5,-8]]
        yellowScarf2Points = [[-6,-8],[-5,-8],[-5,-7],[-6,-7]]
        
    
        bodyPointsDict['walDCloak'] = self.getRealPosition(walkDarkCloakPoints)
        bodyPointsDict['leg1'] = self.getRealPosition(walkLeg1Points)
        bodyPointsDict['leg2'] = self.getRealPosition(walkLeg2Points)
        bodyPointsDict['hand'] = self.getRealPosition(handPoints)
        bodyPointsDict['shoe1'] = self.getRealPosition(shoe1Points) 
        bodyPointsDict['shoe2'] = self.getRealPosition(shoe2Points)         
        bodyPointsDict['rs1'] = self.getRealPosition(redScarf1Points)
        bodyPointsDict['rs2'] = self.getRealPosition(redScarf2Points)
        bodyPointsDict['ys1'] = self.getRealPosition(yellowScarf1Points)
        bodyPointsDict['ys2'] = self.getRealPosition(yellowScarf2Points)
        
        return bodyPointsDict
    
    def walk2BodyPoints(self):
        bodyPointsDict = {}        
        walkDarkCloakPoints = [[-2,-11],[-3,-3],[-4,-2],[-2,-2],[-1,-3],[0,-11]]
              
        walkLeg2Points = [[0.3,-5.2],[2.3,-5.2],[3.1,-1.2],[1.1,-1.2]]        
        walkLeg1Points = [[1,-6],[3,-6],[0,-1.7],[-1.7,-2.7]]
        shoe2Points = [[3.1,-1.2],[3.6,-1.4],[4,-0.9],[3.3,-0.2],[1.1,-0.2],[1.1,-1.2]] 
        shoe1Points = [[-1.6,-2.7],[0,-1.7],[0.5,-1.5],[0.5,-0.7],[-0.5,-0.7],[-2.2,-1.6]]        
        hand1Points = [[-2,-6],[-1,-6],[-1,-5],[-2,-5]]
        hand2Points = [[4,-7.5],[4.5,-7],[4,-6.5]]
        
        
        yellowScarf1Points = [[-3,-11],[-2,-11],[-2,-10],[-3,-10]]
        redScarf1Points = [[-4,-10],[-3,-10],[-3,-9],[-4,-9]]
        redScarf2Points = [[-5,-9],[-4,-9],[-4,-8],[-5,-8]]
        yellowScarf2Points = [[-6,-8],[-5,-8],[-5,-7],[-6,-7]]   
        
        bodyPointsDict['walDCloak'] = self.getRealPosition(walkDarkCloakPoints)
        bodyPointsDict['leg1'] = self.getRealPosition(walkLeg1Points)
        bodyPointsDict['leg2'] = self.getRealPosition(walkLeg2Points)
        
        bodyPointsDict['rs1'] = self.getRealPosition(redScarf1Points)
        bodyPointsDict['rs2'] = self.getRealPosition(redScarf2Points)
        bodyPointsDict['ys1'] = self.getRealPosition(yellowScarf1Points)
        bodyPointsDict['ys2'] = self.getRealPosition(yellowScarf2Points)
        bodyPointsDict['shoe1'] = self.getRealPosition(shoe1Points) 
        bodyPointsDict['shoe2'] = self.getRealPosition(shoe2Points)         
        bodyPointsDict['hand1'] = self.getRealPosition(hand1Points)
        bodyPointsDict['hand2'] = self.getRealPosition(hand2Points)        
        
        return bodyPointsDict

# Front points #############################################################

## stable parts ------------------------------------------------------------

    def frontHead(self):
        headPointsDict = {}
        hatPoints = [[0,-25],[4.5,-18],[3,-17.2],[-3,-17.2],[-4.5,-18]]
        hathairPoints = [[4.5,-18],[3,-17.2],[-3,-17.2],[-4.5,-18],[-4.5,-13],
                         [-2.5,-12],[-3.5,-13],[-4.5,-13.5],[-4.5,-15],
                         [-3.5,-15],[-3.5,-14],[-1.5,-17],[-0.5,-17],[0.5,-16],
                         [2.5,-16],[3.5,-14],[3.5,-15],[4.5,-15],[4.5,-13.5],
                         [3.5,-13],[2.5,-12],[4.5,-13]]
        hairPoints = [[4.5,-18],[2.5,-20],[-2.5,-20],[-4.5,-18],[-4.5,-13],
                         [-2.5,-12],[-3.5,-13],[-4.5,-13.5],[-4.5,-15],
                         [-3.5,-15],[-3.5,-14],[-1.5,-17],[-0.5,-17],[0.5,-16],
                         [2.5,-16],[3.5,-14],[3.5,-15],[4.5,-15],[4.5,-13.5],
                         [3.5,-13],[2.5,-12],[4.5,-13]]
        facePoints = [[-4.5,-15],[-3.5,-15],[-3.5,-14],[-1.5,-17],[-0.5,-17],
                      [0.5,-16],[2.5,-16],[3.5,-14],[3.5,-15],[4.5,-15],
                      [4.5,-13.5],[3.5,-13],[2.5,-12],[-2.5,-12],[-3.5,-13],
                      [-4.5,-13.5]]
        scarPoints = [[-1,-16.9],[-1.2,-16.5],[-0.8,-16.5],[-1,-16.1]]
        
        leftcheekPoints = [[-3.5,-13.5],[-2.5,-13.5],[-2,-13.16],[-2,-12.83],
                            [-2.5,-12.5],[-3.5,-12.5],[-4,-12.83],[-4,-13.16]]
        rightcheekPoints = [[2.5,-13.5],[3.5,-13.5],[4,-13.16],[4,-12.83],
                                [3.5,-12.5],[2.5,-12.5],[2,-12.83],[2,-13.16]]        
        
        leftEyePoints = [[-2,-14.85],[-1,-14.85],[-1,-14.75],[-1.25,-14.75],
                            [-1.25,-14],[-1.75,-14],[-1.75,-14.75],[-2,-14.75]]
        rightEyePoints = [[2,-14.85],[1,-14.85],[1,-14.75],[1.25,-14.75],
                                [1.25,-14],[1.75,-14],[1.75,-14.75],[2,-14.75]]
        glassesPoints = [[-0.5,-15],[-1,-15.5],[-2,-15.5],[-2.5,-15],[-2.5,-13.25],
                        [-2,-12.75],[-1,-12.75],[-0.5,-13.25],[-0.5,-15],[0.5,-15],
                        [0.5,-13.25],[1,-12.75],[2,-12.75],[2.5,-13.25],[2.5,-15],
                        [2,-15.5],[1,-15.5],[0.5,-15]]
        headPointsDict['hat']= self.getRealPosition(hatPoints)
        headPointsDict['rightcheek']= self.getRealPosition(rightcheekPoints)
        headPointsDict['hatHair']= self.getRealPosition(hathairPoints)
        headPointsDict['hair']= self.getRealPosition(hairPoints)
        headPointsDict['face']= self.getRealPosition(facePoints)
        headPointsDict['scar']= self.getRealPosition(scarPoints) 
        headPointsDict['leftcheek']= self.getRealPosition(leftcheekPoints) 
        headPointsDict['glasses']= self.getRealPosition(glassesPoints)
        headPointsDict['leftEye']= self.getRealPosition(leftEyePoints) 
        headPointsDict['rightEye']= self.getRealPosition(rightEyePoints) 
        return headPointsDict
    
    def frontBodyPoints(self):
        bodyPointsDict = {}
        red1Points = [[-2.5,-12],[-1.5,-12],[-1.5,-11],[-2.5,-11]]
        red2Points = [[-0.5,-12],[0.5,-12],[0.5,-11],[-0.5,-11]]
        red3Points = [[2.5,-12],[1.5,-12],[1.5,-11],[2.5,-11]]
        red4Points = [[2.5,-10],[1.5,-10],[1.5,-9],[2.5,-9]]
        red5Points = [[2.5,-8],[1.5,-8],[1.5,-7],[2.5,-7]]
        yellow1Points = [[-1.5,-12],[-0.5,-12],[-0.5,-11],[-1.5,-11]]
        yellow2Points = [[1.5,-12],[0.5,-12],[0.5,-11],[1.5,-11]]
        yellow3Points = [[2.5,-11],[1.5,-11],[1.5,-10],[2.5,-10]]
        yellow4Points = [[2.5,-9],[1.5,-9],[1.5,-8],[2.5,-8]]
        collar1Points = [[0,-8.7],[-1,-11],[-2,-11],[-0.6,-8.7],[-1.5,-5]]
        collar2Points = [[0,-8.7],[1,-11],[2,-11],[0.6,-8.7],[1.5,-5]]
        clothesPoints = [[-1,-11],[1,-11],[0,-8.7],[1.3,-6],[-1.3,-6],[0,-8.7]]
        LCloak1Points = [[-2,-11],[-2.3,-11],[-4.5,-2],[-1.5,-5],[-0.6,-8.7]]
        LCloak2Points = [[2,-11],[2.3,-11],[4.5,-2],[1.5,-5],[0.6,-8.7]]
        DCloak1Points = [[-2.3,-11],[-3,-10.5],[-4.5,-2]]
        DCloak2Points = [[2.3,-11],[3,-10.5],[4.5,-2]]
        hand1Points = [[-4,-7],[-3,-7],[-3,-6],[-4,-6]]
        hand2Points = [[4,-7],[3,-7],[3,-6],[4,-6]]
        cloakInside1Points = [[-2,-6],[-4.5,-2],[-2,-2]]
        cloakInside2Points = [[2,-6],[4.5,-2],[2,-2]]
        bodyPointsDict['r1']=self.getRealPosition(red1Points)
        bodyPointsDict['r2']=self.getRealPosition(red2Points)
        bodyPointsDict['r3']=self.getRealPosition(red3Points)
        bodyPointsDict['r4']=self.getRealPosition(red4Points)
        bodyPointsDict['r5']=self.getRealPosition(red5Points)
        bodyPointsDict['y1']=self.getRealPosition(yellow1Points)
        bodyPointsDict['y2']=self.getRealPosition(yellow2Points)
        bodyPointsDict['y3']=self.getRealPosition(yellow3Points)
        bodyPointsDict['y4']=self.getRealPosition(yellow4Points)
        bodyPointsDict['collar1']=self.getRealPosition(collar1Points)
        bodyPointsDict['collar2']=self.getRealPosition(collar2Points)
        bodyPointsDict['clothes']=self.getRealPosition(clothesPoints)
        bodyPointsDict['lCloak1']=self.getRealPosition(LCloak1Points)
        bodyPointsDict['lCloak2']=self.getRealPosition(LCloak2Points)
        bodyPointsDict['dCloak1']=self.getRealPosition(DCloak1Points)
        bodyPointsDict['dCloak2']=self.getRealPosition(DCloak2Points)
        bodyPointsDict['hand1']=self.getRealPosition(hand1Points)
        bodyPointsDict['hand2']=self.getRealPosition(hand2Points)
        bodyPointsDict['inside1']=self.getRealPosition(cloakInside1Points)
        bodyPointsDict['inside2']=self.getRealPosition(cloakInside2Points)        
        return bodyPointsDict

## gesture difference parts --------------------------------------------------




# draw functions #############################################################        

## front draw -----------------------------------------------------------------
    def drawFrontHarryBody(self,surface):
        Dict = self.frontBodyPoints()
        drawList = ['collar1','collar2','clothes','inside1','inside2','dCloak1',
                    'dCloak2','hand1','hand2','lCloak1',
                    'lCloak2','r1','r2','r3','r4','r5','y1','y2','y3','y4']
        drawColor = [(120,120,120),(120,120,120),(255,255,255),(100,100,100),
                     (100,100,100),(0,0,0),(0,0,0),
                     (255, 222, 167),(255, 222, 167),(30,30,30),(30,30,30),
                     (251, 213, 70),(251, 213, 70),(251, 213, 70),(251, 213, 70),
                     (251, 213, 70),(200,31,28),(200,31,28),(200,31,28),(200,31,28)]
        for index in range(len(drawList)):
            pygame.draw.polygon(surface, drawColor[index],Dict[drawList[index]])           
    
    
    def drawFrontHarryHead(self,surface):
        Dict = self.frontHead()
        drawList = ['hat','hatHair','face','leftEye','rightEye',
                    'leftcheek','rightcheek']
        drawColor = [(30,30,30),(135,68,39),
                     (255, 222, 167),(0,0,0),(0,0,0),
                     (255,183,192),(255,183,192)]
        for index in range(len(drawList)):
            pygame.draw.polygon(surface, drawColor[index],Dict[drawList[index]])
        
        linePoints = Dict['glasses']
        for index in range(len(linePoints)-1):
            pygame.draw.line(surface,(0,0,0),linePoints[index],
                             linePoints[index+1],int(self.pixelSize/3))  
        if self.characterDir!='left':
            linePoints = Dict['scar']
            for index in range(len(linePoints)-1):
                pygame.draw.aaline(surface,(91,87,91),linePoints[index],
                             linePoints[index+1],int(self.pixelSize/3))               
        
        
        
       
## side draw ------------------------------------------------------------------
        
    def drawHarryHead(self,surface):
        Dict = self.HeadPoints()
        drawList = ['hatLight','hatDark','hatHair',
                    'face','leftEye','rightEye',
                    'cheek']
        drawColor = [(30,30,30),(0,0,0),(135,68,39),
                     (255, 222, 167),(0,0,0),(0,0,0),
                     (255,183,192)]
        for index in range(len(drawList)):
            pygame.draw.polygon(surface, drawColor[index],Dict[drawList[index]])
        
        linePoints = Dict['glasses']
        for index in range(len(linePoints)-1):
            pygame.draw.line(surface,(0,0,0),linePoints[index],
                             linePoints[index+1],int(self.pixelSize/3))  
        if self.characterDir=='right':
            linePoints = Dict['scar']
            for index in range(len(linePoints)-1):
                pygame.draw.aaline(surface,(91,87,91),linePoints[index],
                             linePoints[index+1],int(self.pixelSize/3))         
    ## upper body         
    def drawHarryBody1(self,surface):
        stableDict = self.stableBody1Points()
        drawList = ['r1','r2','r3','y1','y2','y3',
                    'LCloak','collar','clothes','hand']
        drawColor = [(251, 213, 70),(251, 213, 70),(251, 213, 70),
                     (200,31,28),(200,31,28),(200,31,28),
                     (30,30,30),(120,120,120),(255,255,255),(255, 222, 167)]
        for index in range(len(drawList)):
            pygame.draw.polygon(surface, drawColor[index],stableDict[drawList[index]])  
   
    def drawHarryBody2(self,surface):
        stableDict = self.stableBody2Points()
        drawList = ['r1','r2','r3','y1','y2','y3',
                    'LCloak','collar','clothes']
        drawColor = [(251, 213, 70),(251, 213, 70),(251, 213, 70),
                     (200,31,28),(200,31,28),(200,31,28),
                     (30,30,30),(120,120,120),(255,255,255)]
        for index in range(len(drawList)):
            pygame.draw.polygon(surface, drawColor[index],stableDict[drawList[index]])  
            
    ## lower body         
    def drawHarryStandBody(self,surface):
        Dict = self.standBodyPoints()
        drawList = ['staDCloak','staLeg1','staLeg2','shoe1','shoe2',
                    'rs1','rs2','ys1','ys2']
        drawColor = [(0,0,0),(70,70,70),(90,90,90),
                     (20,20,20),(30,30,30),(251, 213, 70),(251, 213, 70),
                     (200,31,28),(200,31,28)]
        for index in range(len(drawList)):        
            pygame.draw.polygon(surface, drawColor[index],Dict[drawList[index]]) 
            
    def drawHarryWalkBody1(self,surface):
        Dict = self.walk1BodyPoints()
        drawList = ['leg1','leg2','shoe1','shoe2','walDCloak','hand',
                    'rs1','rs2','ys1','ys2']
        drawColor = [(70,70,70),(90,90,90),(20,20,20),(30,30,30),(0,0,0),
                    (255, 222, 167),(251, 213, 70),
                     (251, 213, 70),(200,31,28),(200,31,28)]
        for index in range(len(drawList)):        
            pygame.draw.polygon(surface, drawColor[index],Dict[drawList[index]]) 
            
            
    def drawHarryWalkBody2(self,surface):
            Dict = self.walk2BodyPoints()
            drawList = ['leg1','leg2','shoe1','shoe2','walDCloak','hand1','hand2',
                        'rs1','rs2','ys1','ys2']
            drawColor = [(70,70,70),(90,90,90),(20,20,20),(30,30,30),(0,0,0),
                          (255, 222, 167),(255, 222, 167),(251, 213, 70),(251, 213, 70),
                         (200,31,28),(200,31,28)]
            for index in range(len(drawList)):        
                pygame.draw.polygon(surface, drawColor[index],Dict[drawList[index]])

## icon draw ------------------------------------------------------------------


    def drawHarryIcon(self,surface):
        Dict = self.frontHead()
        drawList = ['hair','face','leftEye','rightEye',
                    'leftcheek','rightcheek']
        drawColor = [(135,68,39),(255, 222, 167),(0,0,0),(0,0,0),
                     (255,183,192),(255,183,192)]
        for index in range(len(drawList)):
            pygame.draw.polygon(surface, drawColor[index],Dict[drawList[index]])
        
        linePoints = Dict['glasses']
        for index in range(len(linePoints)-1):
            pygame.draw.line(surface,(0,0,0),linePoints[index],
                             linePoints[index+1],int(self.pixelSize/3))  
        if self.characterDir!='left':
            linePoints = Dict['scar']
            for index in range(len(linePoints)-1):
                pygame.draw.aaline(surface,(91,87,91),linePoints[index],
                             linePoints[index+1],int(self.pixelSize/3))            
    
## whole person draw ----------------------------------------------------------    


# side     
    def drawHarryStand(self,surface):
        self.drawHarryHead(surface)
        self.drawHarryStandBody(surface)
        self.drawHarryBody1(surface)
        
    def drawHarryWalk1(self,surface):
        self.drawHarryHead(surface)
        self.drawHarryWalkBody1(surface) 
        self.drawHarryBody2(surface)      
        
    def drawHarryWalk2(self,surface):
        self.drawHarryHead(surface)
        self.drawHarryWalkBody2(surface)
        self.drawHarryBody2(surface)

# front 
     
    def drawHarryFrontStand(self,surface):
        self.drawFrontHarryHead(surface)
        self.drawFrontHarryBody(surface)
    
# MAIN  ######################################################################       
    
    def drawHarry(self,surface):
        if self.characterDir == 'down':
            self.drawHarryFrontStand(surface)
        else:
            if (self.walkCount%4==0):
                self.drawHarryWalk1(surface)
            elif (self.walkCount%4==1 or self.walkCount%4==3):
                self.drawHarryStand(surface)
            elif (self.walkCount%4==2):
                self.drawHarryWalk2(surface)        
        
        
 
        
