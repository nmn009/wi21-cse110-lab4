1. It will print i = prices.length because we defined "var" for i and "var" has no block scope 
2. It will print discountedPrice value becase we also use "var" to defined discountedPrice and "var" has no block scope
3. It will print finalPrice value because it was defined within the scope of the function
4. The loop will runs 100 * (1 - 0.5) = 50 ; 50 * 100 / 100 = 50
                      200 * (1 - 0.5) = 100; 100 * 100 / 100 = 100
                      300 * (1 - 0.5) = 150; 150 * 100 / 100 = 150
                      Therefore discountPrice([100,200,300],.5) will return an array discounted = [50,100,150]
5. Error! We use "let" to defined i so it was out the scope at line 11
6. Error! We use "let" to defined discountedPrice and it was out of the scope at line 12
7. It will print the value of finalPrice since finalPrice still in the scope at line 13
8. The loop will runs 100 * (1 - 0.5) = 50 ; 50 * 100 / 100 = 50
                      200 * (1 - 0.5) = 100; 100 * 100 / 100 = 100
                      300 * (1 - 0.5) = 150; 150 * 100 / 100 = 150
                      Therefore discountPrice([100,200,300],.5) will return an array discounted = [50,100,150]
9. Error! It is outside the scope
10. Error! Can't change the value of const variable and it is out of the scope also
11. Error! Can't change the value of const variable
12. It will print the value of the array discountPrices because we could change the properties of const array
13. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
14. A. 32 Because '3' is like string type so after using + as append other string then '3' + '2' = '32'
    B. 1 Because "-" only used for number then '3' will change into 3 so 3-2=1
    C. 3 because 3 here is a number so 3 + null = 3
    D. 3null because 3 is string and null is string also, so '3' + null = 3null
    E. 4 because true = 1 then 1 + 3 = 4
    F. 3 because false=0 then 0 + 3 = 3
    G. "3" is string so "+" used as append, then it will be 3undefined
    H. Error or NaN because we use "-" here but a number can't do "-" undefined
15. A. true because we are comparing 2 number so 2 > 1 is true
    B. false because we are comparing 2 string, '2' > '1' then '2' > '12'  
    C. true because we are comparing 2 number
    D. false because 2 and '2' is not the same type
    E. false because true = 1
    F. true because Boolean(2) will return true so true === true ( same value and same type)
16. The different is `==` only compare the value and `===` compare the value and type of the variables.
17. It will print How are you? because the condition 2==true is false so it go to second condition which is (2) which is always true   
19. modifyArray([1,2,3], doSomething)
        newArr = []
        i = 0
          doSomething(1,fucntion(x)) --> x = 1 + 2 = 3 --> function(3) = 6 --> newArr = [6]
        i = 1
          doSomething(2,function(x)) --> x = 2 + 2 = 4 --> function(4) = 8 --> newArr = [6,8]
        i = 2
          doSomething(3,function(x)) --> x = 3 + 2 = 5 --> function(5) = 10 --> newArr = [6,8,10]
    Therefore, the result is [6,8,10]
21. 1
    4
    3
    2
    
    
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
