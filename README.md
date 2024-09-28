#------ intial input ----------
InputColI=2
InputRowI=4
NNI=(InputColI+1)*InputRowI
rows = InputRowI
cols = InputColI
Input = []
for _ in range(rows):
    row = [0] * cols
    Input.append(row)
#------ intial Target ----------
InputColT=4
InputRowT=2
NNT=(InputColT+1)*InputRowT
rows = InputRowT
cols = InputColT
Target = []
for _ in range(rows):
    row = [0] * cols
    Target.append(row)
#------ intial WieghtS ----------
InputColWS=3
InputRowWS=2
NNWS=InputColWS*InputRowWS
rows = InputRowWS
cols = InputColWS
WieghtS = []
for _ in range(rows):
    row = [0] * cols
    WieghtS.append(row)
#------ intial Target ----------
InputRowW=3
Wieght=[0]*InputRowW
#------ intial Target ----------
InputRowW=3
Delta=[0]*InputRowW
#------ intial X ----------
InputRowW=3
x=[0]*InputRowW
#------ Read_Input ----------
def Read_Input():
        fp=open("E:\\PrivateToTransaction\\NeuralNetwork\\input.txt", "r") 
        Data=fp.read()
        i=0
        row=0
        col=0
        for i in range(0,NNI):
            char=['0','1']
            if Data[i] in char :
                if Data[i]=='0' :
                     Digit=-1
                if Data[i]=='1' :
                     Digit=1
                Input[row][col]=Digit
                col=col+1
                if col==InputColI:
                    col=0
                    row=row+1
                    row=row%InputRowI

        fp.close()       
#------ Read_Input ----------
def Read_Target():
        fp=open("E:\\PrivateToTransaction\\NeuralNetwork\\Target.txt", "r") 
        Data=fp.read()
        i=0
        row=0
        col=0
        for i in range(0,NNT):
            char=['0','1']
            if Data[i] in char :
                if Data[i]=='0' :
                     Digit=-1
                if Data[i]=='1' :
                     Digit=1
                Target[row][col]=Digit
                col=col+1
                if col==InputColT:
                    col=0
                    row=row+1
                    row=row%InputRowT

        fp.close()  
RowI=4
ColI=2
ColB=ColI+1
Read_Input()
Read_Target()
print('input=',Input)
print('Target=',Target)
print('Wieght=',Wieght)
print('WieghtS=',WieghtS)
print('x=',x)
print('Delta=',Delta)
u=input('****')


Y=0
alpha=1

#--------- print data ---------------
def init():
    print('---- input ------')
    for i in range(0,RowI):
          print(i,Input[i])
    print('---- Target ------')
    print(Target[0])
    print(Target[1])

    print('---- Wieght ------')
    print(Wieght)
    print('---- Y ------')
    print(Y)
    print('********************** INIT ********************** ')   
    #u=input('----')  

#-------------- out ------------------
def initX():
    for i in range(0,ColB):
          if i==0 :
              x[0]=1
          else:
              x[i]=Input[Row][i-1]

#-------------- Sigma ------------------
def Sigma():
    Y=0
    for i in range(0,ColB):
      Y=Y+x[i]*Wieght[i]
    return Y
#-------------- Sigma ------------------
def ActiveFun(Y):
    if Y>=0 :
        return 1
    else:
        return -1
#-------------- Sigma ------------------
def WeieghtUpdate(Y,T):
  
 if Y!=T[Row]:
   for i in range(0,ColB):
     Delta[i]=alpha*T[Row]*x[i]
     Wieght[i]=Wieght[i]+Delta[i]

#-------------- PRINT VECTOR -----------
def PrintVec(V):
  M=len(V)  
  for i in range(0,M):
     print(V[M-i-1], end=' ')

#--------- main ----------------------
init()
while(True):
 for j in range(0,2):   
      T=Target[j]
      k=0
      Wieght=[0]*InputRowW
      for i in range(0,20):
        WieghtOld=Wieght
        Row=i%InputRowI
        initX()
        Yin=Sigma()
        Y=ActiveFun(Yin)
        WeieghtUpdate(Y,T)
        WieghtNew=Wieght
        if WieghtOld==WieghtNew :
            k=k+1
        if k==8 :
            break
      WieghtS[j]=Wieght
 print('--------------WieghtS---------------------')
 print(WieghtS[0])
 print(WieghtS[1])

 file_path = "matrix.txt"

 with open(file_path, "w") as file:
    for row in WieghtS:
        line = " ".join(str(element) for element in row)
        file.write(line + "\n")

 u=input('----------- 2 ----------------')


