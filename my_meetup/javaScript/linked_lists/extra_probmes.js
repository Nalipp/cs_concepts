// problem 1
print all the values in a linked list

Given: 1 --> 2 --> 6 --> 3 --> 4 --> 
console.log -> 
1
2
3
4


// problem 2
203. Remove Linked List Elements
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5


// problem 3
234. Palindrome Linked List
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?


// problem 4
160. Intersection of Two Linked Lists
Write a program to find the node at which the intersection of two singly linked lists begins.


// problem 5
83. Remove Duplicates from Sorted List
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.


// problem 6
21. Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4


Hi Rich,


Thanks for comming to the meetup last night. 

I noticed that you were lacking in some of the fundamentals of implimenting linked lists. 
  
I totaly understand this as 6 months ago I was learning these structures for the first time. 

If you want to be able to keep up with the problems in the meetup it will take a considerable amount of pre-study on your part.

Here is a link to what I used to get proficient with linked lists and other data structures
https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/singly-linked-lists

As a guess, I would say it probalby takes 20-30 hours of studying to be at level needed to pass easy-medium technical interview question involving a linked list.

This is similar to the other data structures we are going to study. 

It is too expensive for a tutor to be there with you for the entire journey, you will need to find a habit of studying these on your own.

With work anyone can do it, the secret is everyone has to work.

I thought there was a pretty good chemistry amoung students last night.

I hope you can commit to comming each week and spend some time studying before class.

Let me know if you are up for the challenge and want me to reserve a seat for you!


Cheers,


Nate


  

Hi Elita,

Thanks for comming to the meetup last night.

About 6 months ago I was learning these structures for the first time. 

Here is a link to what I used to get proficient with linked lists and other data structures
https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/singly-linked-lists

As a guess, I would say it probalby takes 20-30 hours of studying to be at level needed to pass easy-medium technical interview question involving a linked list.

I hope to provide an environemnt where students study on their own and then come to the meetup to practice whitboarding similar to situations found in interviews.

In the future I will try to provide some prep work.

I thought there was a pretty good chemistry amoung students last night so I hope you can commit to comming each week.

Let me know if you want me to reserve your spot, if there is enough interest I will close the meetup and we can continue working with the same people!

Best,


Nate



Helo Min,

I can't believe I didn't recongnize your name was Korean last night!

I am glad you could make it to the meetup last night.

About 6 months ago I was learning these structures for the first time. 

Here is a link to what I used to get proficient with linked lists and other data structures
https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/singly-linked-lists

As a guess, I would say it probalby takes 20-30 hours of studying to be at level needed to pass easy-medium technical interview question involving a linked list.

I hope to provide an environemnt where students study on their own and then come to the meetup to practice whitboarding similar to situations found in interviews.

In the future I will try to provide some prep work.

I thought there was a pretty good chemistry amoung students last night so I hope you can commit to comming each week.

Let me know if you want me to reserve your spot, if there is enough interest I will close the meetup and we can continue working with the same people!

Best,


Nate




Som

The minute my head hit the pillow last night I relized the solution we were looking for last night.

If the first list has more nodes before reaching the merging node than the second list

Each pointer moves one space at a time.

1 - 2 - 3 - 4 - 5 \
                   6 - 7 - 8
            4 - 5 /

When a pointer gets to the end of the list it needs to start at the beginning of the opposite list.

The first list pointer will travel 8 nodes before re-starting at the second list and traveling 3 more nodes before reaching node(6) the second time
8 + 3 = 11

the second list pointer will travel 5 nodes before re-starting at the first list where it travels an additional 6 nodes before reaching node(6)
5 + 6 = 11

Each list pointer has to travel both lists to reach the same amount of pointers and the conversion point.


Anyway...

Thanks for comming to the meetup last night.

I was also reaching out to the others.

I think there was a pretty good chemistry in the group and It would be great if we could continue working with the same people each week.

Let me know if you want to commit to comming and I will reserve a spot for you.

Also, if you know of another potential member who would fit in well with your level and with Jayant it would be nice to have three at the same level.

That way if someone couldn't make it one night there would still be at least two people at the same level who could practice together.


Best,


Nate




Jaynt


The minute my head hit the pillow last night I relized the solution we were looking for last night with the conversion point problem.

If the first list has more nodes before reaching the merging node than the second list

Each pointer moves one space at a time.

1 - 2 - 3 - 4 - 5 \
                   6 - 7 - 8
            4 - 5 /

When a pointer gets to the end of the list it needs to start at the beginning of the opposite list.

The first list pointer will travel 8 nodes before re-starting at the second list and traveling 3 more nodes before reaching node(6) the second time
8 + 3 = 11

the second list pointer will travel 5 nodes before re-starting at the first list where it travels an additional 6 nodes before reaching node(6)
5 + 6 = 11

Each list pointer has to travel both lists to reach the same amount of pointers and the conversion point.


Anyway...

Thanks for comming to the meetup last night.

I was also reaching out to the others.

I think there was a pretty good chemistry in the group and It would be great if we could continue working with the same people each week.

Let me know if you want to commit to comming and I will reserve a spot for you.

Also, if you know of another potential member who would fit in well with your level and with Som it would be nice to have three at the same level.

That way if someone couldn't make it one night there would still be at least two people at the same level who could practice together.


Best,

Nate







Alvin,


When taking the technical challenge I made an incredible blunder from the terminal.

Instead of copying the solutions folder to the Desktop to be uploaded to g-drive, I copied the entire Desktop over the solutions folder!

This reflects poorly on my ability to operate coolly under pressure and as I am sure you noticed it took me almost the entire time to fix it and submit my work.

Looking back there were multiple mistakes on my part in the process and I understand why this would give you red flags.


Last night I started a meet up teaching data structures and algorithms and it went great.

I also did really well on a screen-share technical interview with Outco.

This made me realize I really like teaching and coding and just need to keep at it.

I just wanted to thank you for working with me and I regret not being more polished from the beginning of our connection.

Sometimes luck and timing is just off.

I have no doubts about my continued to pursuits to find a role in the classroom and if it's in the Bay Area or in New York I hope our paths cross again!


Best,


Nate




Alvin,


I wanted to thank you for the time you have spent working with me.

Looking back there have been a few missteps and I hope I can still be considered going forward.

It has been my pleasure to be a part of the process.


Thank You,

Nate





multiple mistakes on my part in the process and I understand why this would give you red flags.



I hope it is possible to still be considered for meeting with the local 



Last night I started a meet up teaching data structures and algorithms and it went great.

I also did really well on a screen-share technical interview with Outco.

This made me realize I really like teaching and coding and just need to keep at it.

I just wanted to thank you for working with me and I regret not being more polished from the beginning of our connection.

Sometimes luck and timing is just off.

I have no doubts about my continued to pursuits to find a role in the classroom and if it's in the Bay Area or in New York I hope our paths cross again!



Best,


Nate





