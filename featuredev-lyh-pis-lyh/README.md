# 문제 : 기능개발
## 1. 이해 
    - progresses : 현재 진도율을 element로 갖는 배열
    - speeds : 하루에 작업하는 양을 element로 갖는 배열
    - return : 각 배포시점에 몇개의 기능이 배포 되는지를 나타내는 정수 element를 갖는 배열
    - progresses에 있는 각element가 100 이상이 되야 배포가 된다.
    - progresses의 element 순서대로 배포 해야하며, 앞에 것보다 뒤의 것이 먼저 완료 되더라도 앞의 것이 완료 될 경우에 같이 배포한다. 
    - progresses와 speed의 요소 개수는 동일하다.
## 2. 계획
    - progresses에 speeds를 더해준다.
    - 더한 후에, 맨 첫 요소가 100 이상인지 확인하고 혹시 맨 첫 요소가 100 되기전에 이미 된 work가 존재하는지 확인을 위해 반복문을 사용
    - 100이 된것이 있다면, progresses와 speeds를 pop 하고 , 횟수를 센다.
    - 그 이후, result에 shift를 하여 입력.
## 3. 실행
## 4. 반성

