'''
15-112 2016Fall Term-Project
Name: Haiyun Tang
AndrewID: haiyunt
Project Name: Adventure of finding Philosopher's Stone
'''
# =============================================================================
# IMPORT MODULES
# =============================================================================

## built-in modules
import sys
import math
import random
import string
import os
import pygame

## custom modules
from tpCharacters import*
from tpMaps import*



# =============================================================================
# INITIALIZATION
# =============================================================================

pygame.init()

# =============================================================================
# VARIABLES
# =============================================================================

## window 
size = screen_width,screen_height = 1200,650
screen = pygame.display.set_mode([screen_width, screen_height])
pygame.display.set_caption("Adventure of finding Philosopher's Stone")

## Initialize variables
DisplayingScreen = 'MainScreen'

viewRow = 13
viewCol = 6
gamemap = gameMap(viewRow,viewCol,1200,600)

##roleInit()
initRow = 10
initCol = 6
gamemap.mapWall[initRow][initCol]=2
gamemap.getGridPosition(initRow,initCol)
roleX = (gamemap.point1[0]+gamemap.point2[0])/2
roleY = (gamemap.point1[1]+gamemap.point3[1])/2
pixel = 6*1.5 *1.5 
direction = 'right'
character = 'harry'
player = HarryPotter(roleX,roleY,direction,pixel)
zoomindex = 0

# =============================================================================
# FUNCTIONS
# =============================================================================
def keyUpDownCtrl(event):
    global zoomindex    
    if event.type == pygame.KEYDOWN:
        k = pygame.key.name(event.key)        
        if k == 'right':
            if player.characterDir != 'right':	    	
                player.characterDir = 'right'
            else:
                if gamemap.mapRoad[player.roleRow][player.roleCol+1]!=1:return
                else:
                    gamemap.mapWall[player.roleRow][player.roleCol]=0
                    player.roleCol +=1
                    gamemap.mapWall[player.roleRow][player.roleCol]=2
                
                    player.walkCount+=1
                    gamemap.viewCol+=1	
        elif k == 'left':
            if player.characterDir!='left':
                player.characterDir='left'
            else:
                if gamemap.mapRoad[player.roleRow][player.roleCol-1]!=1:return
                else:           
                    gamemap.mapWall[player.roleRow][player.roleCol]=0
                    player.roleCol -=1
                    gamemap.mapWall[player.roleRow][player.roleCol]=2
		    
	       
                    player.walkCount +=1
                    gamemap.viewCol-=1
        elif k == 'up':
            if gamemap.mapRoad[player.roleRow-1][player.roleCol]!=1:return
            else:             
                gamemap.mapWall[player.roleRow][player.roleCol]=0
                player.roleRow -=1
                gamemap.mapWall[player.roleRow][player.roleCol]=2
                player.direction='left'
	   
                player.walkCount +=1
                gamemap.viewRow-=1
        elif k == 'down':
            if player.characterDir != 'down':
                player.characterDir = 'down'
            else:
                if (player.roleRow+1>=len(gamemap.mapRoad) or 
                  gamemap.mapRoad[player.roleRow+1][player.roleCol]!=1):return
                else:             
                    gamemap.mapWall[player.roleRow][player.roleCol]=0
                    player.roleRow +=1
                    gamemap.mapWall[player.roleRow][player.roleCol]=2
                    player.characterDir='down'
	            #player.roleY +=10
                    player.walkCount +=1
                    gamemap.viewRow +=1
        elif k == 'e':
            gamemap.theta -=0.01
            gamemap.deltaChange += 1
            gamemap.vp1Y -=gamemap.deltaChange**2
            gamemap.playerD +=gamemap.deltaChange**2
            gamemap.initCubeHeight = math.sin(gamemap.theta)*gamemap.actCubeSize
        elif k == 's':
            zoomindex -=1
            gamemap.viewRow +=1
            gamemap.actCubeSize *=0.5
            gamemap.vp1Y -=100
            gamemap.initCubeHeight *= 0.4
            gamemap.playerD *=2
            player.pixelSize /=1.5
        elif k == 'w':
            if zoomindex== 0:return
            else:
                zoomindex +=1
                gamemap.viewRow -=1
                gamemap.actCubeSize /=0.5
                gamemap.vp1Y +=100
                gamemap.initCubeHeight /= 0.4
                gamemap.playerD /=2
                player.pixelSize *=1.5          
	    


def drawWall(surface):
    for row in range(len(gamemap.mapWall)):
        for col in range(gamemap.viewCol+1):           
            if (gamemap.mapWall[row][col]==3 and col<gamemap.viewCol and 
               (gamemap.playerD+gamemap.stepSize*(gamemap.viewRow-row-1)>0)):
                gamemap.getGridPosition(row,col)
                pygame.draw.polygon(surface,gamemap.colorSet['lightTree'],
                                    [gamemap.point5,gamemap.point6,
                                    gamemap.point8,gamemap.point7])
                if (row==len(gamemap.mapWall)-1): 
                        pygame.draw.polygon(surface,gamemap.colorSet['darkTree'],
                                            [gamemap.point3,gamemap.point4,
                                             gamemap.point8,gamemap.point7])
                if  (gamemap.mapWall[row][col+1]!=1 and 
                           gamemap.mapWall[row][col+1]!=3):             
                        pygame.draw.polygon(surface,gamemap.colorSet['frontTree'],
                                            [gamemap.point8,gamemap.point6,
                                            gamemap.point2,gamemap.point4])
            if (gamemap.mapWall[row][col]==1):
                if (col<gamemap.viewCol and (gamemap.playerD+
                         gamemap.stepSize*(gamemap.viewRow-row-1)>0)):
                    gamemap.getGridPosition(row,col)
                    gamemap.drawStoneWallLight(surface,gamemap.point5,
                            gamemap.point6,gamemap.point7,gamemap.point8)
                    if (gamemap.mapWall[row+1][col]!=3 and 
                               gamemap.mapWall[row+1][col]!=1):
                        gamemap.drawStoneWallDark(surface,gamemap.point3,
                            gamemap.point4,gamemap.point7,gamemap.point8)
                    if (gamemap.mapWall[row][col+1]!=1 and  
                               gamemap.mapWall[row][col+1]!=3):
                        gamemap.drawStoneWallMid(surface,gamemap.point8,
                        gamemap.point6,gamemap.point4,gamemap.point2)
            if (gamemap.mapWall[row][col]==2 and character=='harry'):
                gamemap.getGridPosition(row,col)
                player.characterX = (gamemap.point1[0]+gamemap.point2[0])/2
                player.characterY = (gamemap.point1[1]+gamemap.point3[1])/2
                player.drawHarry(surface)
                
                    
        for col in range(len(gamemap.mapWall[0])-1,gamemap.viewCol-1,-1):  
            if (gamemap.mapWall[row][col]==3 and col>gamemap.viewCol and 
               (gamemap.playerD+gamemap.stepSize*(gamemap.viewRow-row-1)>0)):
                gamemap.getGridPosition(row,col)
                pygame.draw.polygon(surface,gamemap.colorSet['lightTree'],
                                    [gamemap.point5,gamemap.point6,
                                          gamemap.point8,gamemap.point7])
                if (row==len(gamemap.mapWall)-1): 
                        pygame.draw.polygon(surface,gamemap.colorSet['darkTree'],
                                            [gamemap.point3,gamemap.point4,
                                             gamemap.point8,gamemap.point7])
                if  (gamemap.mapWall[row][col-1]!=1 and 
                                gamemap.mapWall[row][col-1]!=3):             
                        pygame.draw.polygon(surface,gamemap.colorSet['frontTree'],
                                            [gamemap.point1,gamemap.point5,
                                            gamemap.point7,gamemap.point3])
            if (gamemap.mapWall[row][col]==3 and col==gamemap.viewCol):
                gamemap.getGridPosition(row,col)
                pygame.draw.polygon(surface,gamemap.colorSet['lightTree'],
                                    [gamemap.point5,gamemap.point6,
                                          gamemap.point8,gamemap.point7])
                if (row==len(gamemap.mapWall)-1): 
                        pygame.draw.polygon(surface,gamemap.colorSet['darkTree'],
                                            [gamemap.point3,gamemap.point4,
                                             gamemap.point8,gamemap.point7])
            if (col>gamemap.viewCol and gamemap.mapWall[row][col]==1
                    and (gamemap.playerD+
                    gamemap.stepSize*(gamemap.viewRow-row-1)>0)):
                    gamemap.getGridPosition(row,col)
                    gamemap.drawStoneWallMid(surface,gamemap.point5,
                            gamemap.point7,gamemap.point1,gamemap.point3)
                    gamemap.drawStoneWallDark(surface,gamemap.point3,
                            gamemap.point4,gamemap.point7,gamemap.point8)
                    gamemap.drawStoneWallLight(surface,gamemap.point5,
                            gamemap.point6,gamemap.point7,gamemap.point8)
            if (col==gamemap.viewCol and gamemap.mapWall[row][col]==1
                    and (gamemap.playerD+
                    gamemap.stepSize*(gamemap.viewRow-row-1)>0)):
                    gamemap.getGridPosition(row,col)
                    gamemap.drawStoneWallDark(surface,gamemap.point3,
                            gamemap.point4,gamemap.point7,gamemap.point8)
                    gamemap.drawStoneWallLight(surface,gamemap.point5,
                            gamemap.point6,gamemap.point7,gamemap.point8)
            if (gamemap.mapWall[row][col]==2 and character=='harry'):
                gamemap.getGridPosition(row,col)
                player.characterX = (gamemap.point1[0]+gamemap.point2[0])/2
                player.characterY = (gamemap.point1[1]+gamemap.point3[1])/2
                player.drawHarry(surface)



# =============================================================================
# MAIN
# =============================================================================

## main loop

done = False
 
## Used to manage how fast the screen updates
clock = pygame.time.Clock()
 
## -------- Main Program Loop -----------
while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        keyUpDownCtrl(event)
 
    ## Clear the screen
    screen.fill(gamemap.colorSet['background'])
    
    gamemap.drawGround(screen)
    drawWall(screen)
    
    
    ## Limit to 10 frames per second
    clock.tick(10)
 
    ## Go ahead and update the screen with what we've drawn.
    pygame.display.flip()
 
