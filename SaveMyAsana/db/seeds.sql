--CLIENT SURVEY (MAY NOTE SAVE)





--INSTRUCTOR SURVEY (MAY NOT SAVE)

INSERT INTO instructorSurveys
    (id, Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("1", "Sarah", "Smith", "La Curl", "La Habra", "CA", "item1", "[item2, item3]", "[item2, item3, item5]", "[item7, item12, item10]", "[item9, item8, item11]", "[item3]", "[item1]");


INSERT INTO instructorSurveys
    (id, Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("2", "Hannah", "Roberts", "House of OM", "New York", "NY", "item2", "[item4]", "[item7, item5]", "item3", "[item3]", "[item3]", "[item6, item5]");


INSERT INTO instructorSurveys
    (id, Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("3", "Bob", "Smith", "Shakti Body", "West New York", "NJ", "item4", "[item2, item3, item5]", "[item1, item4, item7]", "[item14, item12, item13]", "[item8, item13]", "item3", "item3");


INSERT INTO instructorSurveys
    (id, Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("4", "Joe", "Hatch", "Yoga Gym", "Los Angeles", "CA", "item3", "[item4, item5]", "[item6, item8]", "[item3]", "[item3]", "[item3]", "[item1]");


INSERT INTO instructorSurveys
    (id, Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("5", "Lindsay", "Fisher", "5th Street Yoga", "Queens", "NY", "item2", "[item3, item5]", "[item5, item6, item1]", "[item7]", "item9", "item3", "item1");


-- and mbo surveys

INSERT INTO instructorSurveys
    (id, Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("6", "Mary", "Lori", "Clubville", "San Luis Obispo", "CA", "item4", "[item3, item2]", "[item2]", "[item14, item6, item7]", "item14", "item3", "[item1, item3]");

-- and mbo surveys

INSERT INTO instructorSurveys
    (id, Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("7", "Johnny", "Salke", "Clubville", "San Luis Obispo", "CA", "item3", "[item4]", "item8", "item3", "item9", "item3", "item6");
-- and mbo surveys





-- need mbo profiles



-- MAKE SURE YOU HAVE THE MBO PROFILE!
-- FILL IN THE INSTRUCTOR PROFILES!!!!!
-- INSTRUCTOR PROFILE (to database and to page, make sure there are two methods in controller for bio and contact)


--///////////////////////////////////////
--//////JUSTIN PLEASE COMPLETE///////////
--///////////////////////////////////////


-- PLEASE COMPLETE REMAINING rows as I have indicated below.
-- follow the two examples below (Sarah and Mandy are done correctly)
-- just leave the "q1" as is. I will make sure to select the right corresponding item
--


INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("1", "Sarah", "Smith", "123@gmail.com", "(555) 555-5555", "Los Angeles, CA", "bliss.jpg", "item2, item3" , "Hi yogis! My name is Sarah Smith and I have been teaching for 15 years", "I completed my training at YogaWorks here in Manhattan.", "I took my first yoga class ever at the request of a friend who was a long time follower of Maty Ezraty. Maty was a guru in the LA yoga scene at the time. I knew I wanted what she had. I wanted to find it for myself and share it with others.", "I love watching my yogis grow and live their lives. I love witnessing the breakthroughs and the getting through the day-to-day on the yogic path.", "All that you need you already have. Let the world be your teacher.", "https://shop.lululemon.com/p/women-pants/Wunder-Under-Hi-Rise-Tight-Mesh-28/_/prod9200516?color=0001");


INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("2", "Mandy", "O'Share", "m.share@gmail.com", "(562) 299-5555", "Los Angeles, CA", "sunshine.jpg", "item2", "Hey everyone! My name is Mandy O’Share and I want to help you get in touch with your inner self. ", "With my intermediate hatha yoga class, you will learn the postures and techniques that have been passed down to me from my family who are also professional yoga instructors. These techniques have been rooted into my being and I am happy to instill them into any developing yogee. ", "The moment that I realized that I wanted to teach was when I was in college and I had some friends who were stressed out over finals. They needed an outlet and I offered my skills. I found that my teachings were able to keep them cool, calm, and collected.", "If you asked me why I teach it would be because I enjoy helping people find themselves through my sessions. ", "With awareness and breath you can achieve anything you set your mind to", "https://www.manduka.com/cork-block-cork-brown-o-s.html");



---the below need to be completed

INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("3", "Sage", "Sunny", "Sunnysage@gmail.com", "(323) 661-5555", "Dallas, TX", "om.jpg", "item3, item2", "Hello I am Sage. I am a recent yoga client turned instructor. I loved the lessons that I learned from my teachers in the Midwest that I wanted to bring them out to the big City.", "My experiences have been through the teachings of other instructors and through yoga literature from around the world.  My specialities are in iyengar and yoga sculpt.", "I believe that having a strong core can lead to a strong life.", "I have ample time to dedicate to my students. ", "I hope to learn as much from you as you do from me.", "https://shop.lululemon.com/p/women-pants/Align-Pant-Full-Length-28-MD/_/prod8840324?color=26873");




-- Hello I am Sage. I am a recent yoga client turned instructor. 
--I loved the lessons that I learned from my teachers in the Midwest that I wanted to bring them out to the big City. 
--My experiences have been through the teachings of other instructors and through yoga literature from around the world.  My specialities are in iyengar and yoga sculpt. 
--I believe that having a strong core can lead to a strong life. 
--I have ample time to dedicate to my students and hope to learn as much from you as you do from me. 



INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("4", "Estaban", "Geinz", "eGeinz@gmail.com", "(347) 555-5555", "New York, NY", "bliss.jpg", "item3, item5", "Ciao, I am Estaban Geinz. Originally I am from Sicily, but you can catch me theses days in the city of New York. I am your future instructor if you are seeking assistance from an advanced core focused and hot yoga instructor.", "I learned my various teaching styles while backpacking through Europe and learning from others for over 10 years.", "I have developed my own signature style while learning and can assure you that after one of my sessions you will want to book me for the rest of your life. ", "I love sharing my teaching styles with anyone who is willing to dedicate the time to learn. If you have the effort to learn then I have the talent to teach you.", "Make the days count!", "https://shop.lululemon.com/p/women-pants/Keep-The-Fleece-Tight-28/_/prod9200553?color=35476");




-- Ciao, I am Estaban Geinz. Originally I am from Sicily, but you can catch me theses days in the city of New York. 
--I am your future instructor if you are seeking assistance from an advanced core focused and hot yoga instructor. 
--I learned my various teaching styles while backpacking through Europe and learning from others for over 10 years. 
--I have developed my own signature style while learning and can assure you that after one of my sessions you will want to book me for the rest of your life. 
--I love sharing my teaching styles with anyone who is willing to dedicate the time to learn. If you have the effort to learn then I have the talent to teach you. 
--Make the days count!




INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("5", "Matt", "Bluth", "mBluth@aol.com", "(555) 555-5555", "Los Angeles, CA", "bliss.jpg", "item2", "Hi I’m Matt Bluth. I have been a yoga instructor for the past 5 years. I have taught one on one sessions and many medium sized groups of about 10 clients per session. I love serving as a restorative instructor. ", "When I was young I was in a bad cycling accident that damaged my ability to bike again. After a few years of restorative yoga I was able to make strides and ride my bicycle again.", "I saw that yoga had the power to positively change my life and I share it forward.", "The journey begins with acceptance.", " Signing up with me will make you see that you can be restored to a better self.", "https://www.nike.com/t/sportswear-mens-joggers-08Rw4M/804408-010");




-- Hi I’m Matt Bluth. I have been a yoga instructor for the past 5 years. 
--I have taught one on one sessions and many medium sized groups of about 10 clients per session. I love serving as a restorative instructor. 
--When I was young I was in a bad cycling accident that damaged my ability to bike again. After a few years of restorative yoga I was able to make strides and ride my bicycle again. 
--I saw that yoga had the power to positively change my life and I share it forwar
--The journey begins with acceptance. Signing up with me will make you see that you can be restored to a better self. 





INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("6", "Trina", "Ming", "TrinaM@hotmail.com", "(555) 555-5555", "Los Angeles, CA", "bliss.jpg", "item1", "Greetings! I am Trina Ming. My experiences with yoga have been relatively new. I have taken new approaches of experiencing with vinyasa flow yoga. Feedback from my clients has allowed me to create a structured program that will allow full synchronization of breath with a continuous flow of postures.", "A client came to me at the end of a session and explained how I have helped her find inner peace while dealing with the stress of her work life.", "I keep teaching because I know that I have made a difference in the life of another.", "Teaching is a transformative experience.", "I would encourage any new client to  dive into the waters headfirst and to be brave when trying something new!", "https://www.manduka.com/mat-wash-travel-spray-gingergrass.html");



-- Greetings! I am Trina Ming. My experiences with yoga have been relatively new. 
--I have taken new approaches of experiencing with vinyasa flow yoga. Feedback from my clients has allowed me to create a structured program that will allow full synchronization of breath with a continuous flow of postures. 
--A client came to me at the end of a session and explained how I have helped her find inner peace while dealing with the stress of her work life. 
--I keep teaching because I know that I have made a difference in the life of another. 
--I would encourage any new client to  dive into the waters headfirst and to be brave when trying something new!


INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("7", "Steve", "Megale", "123@gmail.com", "(555) 555-5555", "Celevland, OH", "bliss.jpg", "item3", "What’s up guys! My name is Steve Megale. I have been a traveling instructor for 7 years. I have helped clients coast to coast who have commited the time and effort to make a change. I will come to you and help you in intensive one on one iyengar and core yoga.", "My clients have always told me how I make their lives better. They feel energized and renewed.", "This is rewarding within itself and I have seen how my work has empowered my students.", "Teaching to me is a way to keep the art alive", "If you want to improve it starts with you! Make that first step and sign up today", "https://www.nike.com/t/chelsea-fc-tech-fleece-mens-pants-TblDWp");


-- What’s up guys! My name is Steve Megale. 
--I have been a traveling instructor for 7 years. I have helped clients coast to coast who have commited the time and effort to make a change. I will come to you and help you in intensive one on one iyengar and core yoga. 
--My clients have always told me how I make their lives better. They feel energized and renewed. 
--This is rewarding within itself and I have seen how my work has empowered my students. 
--If you want to improve it starts with you! Make that first step and sign up today. 




INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("8", "Dale", "Padelford", "5678.dancer@gmail.com", "(212) 111-5555", "West New York, NJ", "yoga.jpg", "item3", "Hi Yogis! My name is Dale Padelford and I am an instructor who has been leading classes for about four years.", "I did my training on the island and have been teaching all over ever since. I work with yogis of all types (injured to beginner to advanced to elite athlete). I've taught in home and in studio, as well as outdoors.", "When I was newly teaching I was asked to lead a sub gig downtown. I didn't have a lot of information about the studio policies so I just went in with my plan for class and smile. Five minutes, class was interupted by a greeter who was ushering a new student into class. The student was handi-capped in a wheelchair and everyno seemed to know the protocol for accomodating the person. With big smiles, the class shifted to make space for the client. This was a customary practice. I was so struck by the act of kindness and inclusivity I had to hold back an unanticipated wave of emotion. I finished off the class modifying class to include our new friend. That day I knew I wanted to make space for everyone in my classes. I became committed to learning whatever I could accomodate anybody that comes into my yoga space.", "My favorite aspect of being a teacher is giving what I know to the yoga community.", "The power to see is within not without.", "https://www.fabletics.com/product?id=7290250&psrc=womens_bottoms_leggings");


-- Hi 

INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("9", "Stacey", "Simon", "stacysim@gmail.com", "(555) 555-5555", "Atlanta, GA", "bliss.jpg", "item2", "Hi All! My name is Stacey and I am an even keel and restorative instructor. My teaching styles are restorative for those who have dealt with significant trauma in their lives.", "My led retoratives and guided meditations help my students cultivate space for healing. I have personally helped over a hundred clients over the last few years. The cases that I have seen have varied but the reason for coming to me is always the same: they need help. I am here to offer that help by providing instruction and guidance.", "My courses have people feeling like they have begun to heal from any baggage that was weighing them down.", "Teach is the start to building and understanding a new self", "I encourage anyone who needs help and does not know how to start with me!", "https://www.manduka.com/yoga-towels/yogitoes-towels-1/yogitoesar-yoga-towel-vitality-2-0.html");




-- Hi All! My name is Stacey and I am an energetic and effective instructor. 
--My teaching styles are restorative for those who have dealt with significant trauma in their lives. 
--My led retoratives and guided meditations help my students cultivate space for healing. I have personally helped over a hundred clients over the last few years. The cases that I have seen have varied but the reason for coming to me is always the same: they need help. I am here to offer that help by providing instruction and guidance. 
--My courses have people feeling like they have begun to heal from any baggage that was weighing them down. 
--I encourage anyone who needs help and does not know how to start with me! 


--MBO sample instructor. 
--Can be found in the sandbox...

INSERT INTO instructorPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("10", "Johnny", "Salke", "JSYoga@gmail.com", "(805) 121-5521", "San Luis Obispo, CA", "JSalke.jpg", "item3", "Hi Guys! My name is Johnny Salke and I am an active yogi who loves to hike, mountain climb, bike, and row.", "I got into yoga when a buddy of mine suggested it might help me with my climbing. I was having trouble with stability and core strength. He told me yoga had been key to his success in all other athletic activities. So I gave it a go. I signed up for teacher training hoping to understand it better. I came out of training ready and wanting to help others. Haven't looked back!", "I teach an advanced class in a hot room. Its already hard - because Bikram. But I generally let intermediates come in. I am always inspired by the people that come in a fight through. I had a client come and take childs pose for the entire second half of class. I encouraged himm to try other classes and work his way up. He came back three months later at a higher level than a lot of my regulars. He left a huge impression on me and I keep him in my memory bank when I feel burnt out on teaching. I learn so much from my students.", "I love watching people strive for and reach their goals. ", "Take 'give up' out of your vocabulary", "https://www.manduka.com/yoga-towels/yogitoes-towels-1/yogitoesar-yoga-towel-vitality-2-0.html");

-- //////END INSTRUCTOR PROFILES DATA///////




--/////////////////////////////////
--////////CLIENT PROFILES/////////
--////////////////////////////////

--for the below follow the example
--just insert the content following the Jane Smith example
-- make sure to break up the bio content into q3: "ideal practice environment"  q4: "more about yoga journey. "
-- follow the Jake Falco example, leave "q1" and "q2" as is. 

--CLIENT PROFILE  (to database and to page, make sure there are two methods in controller for bio and contact)


INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("1", "Jake", "Falco", "456@gmail.com", "(888) 888-8888", "Los Angeles, CA", "smile.jpg", "item2", "item2", "Hi guys I am looking for an intermediate yoga session with an instructor. The ideal setting would be at a studio where we can practice poses and breathing. ", "I am trying to impress my girlfriend for our anniversary with our own yoga session. She has always wanted to try but never had that extra push. I wanted to see if anyone here would start us off with a good set of sessions.");





INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("2", "Sarah", "Jones", "SJones@gmail.com", "(888) 451-8888", "Ann Arbor, MI", "me.jpg", "item6", "item6", "Hello! Looking for an instructor, preferably in a class setting. I have just felt super stressed with family and work.", "I need a good outlet for all of the negative energy in my life and i believe that I am in the right place.");


-- Sarah
-- Hello! Looking for an instructor, preferably in a class setting. I have just felt super stressed with family and work. 
--I need a good outlet for all of the negative energy in my life and i believe that I am in the right place. 



INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("3", "Jim", "James", "J499James@gmail.com", "(505) 340-8888", "Albequerque, ", "NM", "yogiJim.jpg", "item5", "item3", "Hi everyone I am looking for a yoga class where i can learn to make use of my core. I feel that I can do better by investing in myself and making this change. ", "I am new to the yoga scene and would love some clear instruction.");


-- Jim
-- Hi everyone I am looking for a yoga class where i can learn to make use of my core. I feel that I can do better by investing in myself and making this change. 
--I am new to the yoga scene and would love some clear instruction.




INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("4", "Andy", "Williams", "MichiganInTheRearView@gmail.com", "(616) 888-8888", "Birmingham, AL", "newAndy.jpg", "item3", "item2", "Hello Friends! I would like to pick yoga back up. I use to do it lightly for a for years, but now i want to take the next leap and develop my already existing skills. ", "I know some basics but would love to learn more of the different styles of yoga. This includes bikram and hatha yoga styles. Let me know if you can help!");


-- Andy
-- Hello Friends! I would like to pick yoga back up. I use to do it lightly for a for years, but now i want to take the next leap and develop my already existing skills. 
--I know some basics but would love to learn more of the different styles of yoga. This includes bikram and hatha yoga styles. Let me know if you can help!




INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("5", "Pam", "Loner", "LonelyPam@gmail.com", "(888) 888-8888", "Los Angeles, CA", "Pam.jpg", "item1", "item4", "Hi everyone! I was recently released from physical therapy and I still need some assistance to get to 100%. I would like a one on one session with an instructor who can make the trip to me. ", "I think that my experience with yoga is limited but I am willing to learn. Looking forward to anyone who is available!");



-- Pam
-- Hi everyone! I was recently released from physical therapy and I still need some assistance to get to 100%. I would like a one on one session with an instructor who can make the trip to me. 
-- I think that my experience with yoga is limited but I am willing to learn. Looking forward to anyone who is available!


INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("6", "Stanley", "George", "George.Stanley@gmail.com", "(319) 888-8888", "Des Moines, IA", "cornfield.jpg", "item6", "item3", "Hey! I am a new yogi and would love to learn as much as i can in a classroom session. If i could get the benefit of some weight loss that would be great! ", "The style that I am interested in is vinyasa flow yoga. Looking forward to meeting you!");


-- Stanley
-- Hey! I am a new yogi and would love to learn as much as i can in a classroom session. If i could get the benefit of some weight loss that would be great! 
--The style that I am interested in is vinyasa flow yoga. Looking forward to meeting you!


INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("7", "Angela", "White", "White.Angel@gmail.com", "(571) 199-8855", "Langley, VA", "dharma.jpg", "item2", "item3", "Hi! I am an intermediate yogee. I am looking for a class with other lovers of the art of yoga. ", "I have traveled a lot and have made great friends in my various classes. I look forward to any classes that welcome new members!");


-- Angela
-- Hi! I am an intermediate yogee. I am looking for a class with other lovers of the art of yoga. 
-- I have traveled a lot and have made great friends in my various classes. I look forward to any classes that welcome new members!


INSERT INTO clientPro
    (id, Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("8", "Justin", "Quinonez", "justinq@gmail.com", "(212) 919-0808", "Brooklyn, NY", "justinq.jpg", "item6", "item3", "Hey guys! My name is Justin and I am a beginner yogi...... I am looking for a class with other lovers of the art of yoga. ", "I have traveled a lot and have made great friends in my various classes. I look forward to any classes that welcome new members!");


-- JUSTIN Q.

--/////////////END CLIENT PROS///////////////


--format schema data
--check survey logic
--set up components
--get search and matching done
-- AJAX call + booking





-- CLIENT SEARCH (abbrev. client profile)



INSERT INTO clientSearch
    (Firstname, Lastname, email, phone, loc, img)
values
    ("Jane", "Smith", "456@gmail.com", "(888) 888-8888", "Los Angeles, CA", "smile.jpg");





-- INSTRUCTOR SEARCH + BOOKING BIO CONTENT (abbrev. instructor profile)


INSERT INTO search
    (Firstname, Lastname, email, phone, loc, img)
values
    ("Sarah", "Smith", "123@gmail.com", "(555) 555-5555", "Los Angeles, CA", "bliss.jpg");


-- -- BOOKING (abbrev. instructor profile)


-- INSERT INTO search
--     (Firstname, Lastname, email, phone, city, locState, img, q1, q2, q3, q4, q5, q6, q7)
-- values
--     ("Jane", "Smith", "456@gmail.com", "(888) 888-8888", "Los Angeles", "CA", "smile.jpg", "q1", "q2", "q3", "q4");



-- LOGIN


INSERT INTO userLogin
    (userName, userEmail, Pword)
values
    ("Sarah", "Smith", "pilates123");








