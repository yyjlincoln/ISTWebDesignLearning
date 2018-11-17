#Calculation - Plus
#By Lincoln Yan
import socket
import _thread

def handle(sx,addr=None):
    while True:
        try:
            rargs={}
            content=sx.recv(2048)
            print(content)

            if content==b'':
                sx.close()
                raise Exception("Connection Closed.")
            request=content.decode()
            rpath=request.split(' ')[1]
            print('Request Recieved.')
            print(rpath)
            try:
                rfi={}
                rargs=rpath.split('?')[1].split('&')
                for x in rargs:
                    print(x)
                    rtemp=x.split('=')
                    if len(rtemp)==1: rargs[x]=''
                    else: 
                        print(rtemp)
                        rfi[rtemp[0]]=rtemp[1]
            except Exception as e:
                rargs={}
            
            rargs=rfi
            print(rargs)
            if 'a' in rargs and 'b' in rargs:
                a,b=int(rargs['a']),int(rargs['b'])
                sx.send(b'HTTP/1.1 200 OK\r\n\r\n')
                sx.send(str(a+b).encode())
            else:
                sx.send(b'HTTP/1.1 200 OK\r\n\r\n')
                sx.send(b'Not enough args')

            sx.close()

        except Exception as e:

            try:
                sx.send(b'SysError')
                sx.close()
            except:
                pass
        
            return


s=socket.socket()
s.bind(('localhost',8080))
s.listen(10)
while True:
    sx,addr=s.accept()
    _thread.start_new(handle,(sx,addr))