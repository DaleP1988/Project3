--CLIENT SURVEY (MAY NOTE SAVE)




--INSTRUCTOR SURVEY (MAY NOT SAVE)

INSERT INTO instructorSurveys
    (Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("Sarah", "Smith", "La Curl", "La Habra", "CA", "item1", "[item2, item3]", "[item2, item3, item5]", "[item7, item12, item10]", "[item9, item8, item11]", "[item3]", "[item1]");


INSERT INTO instructorSurveys
    (Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("Hannah", "Roberts", "House of OM", "New York", "NY", "item2", "[item4]", "[item7, item5]", "item3", "[item3]", "[item3]", "[item6, item5]");


INSERT INTO instructorSurveys
    (Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("Bob", "Smith", "Shakti Body", "West New York", "NJ", "item4", "[item2, item3, item5]", "[item1, item4, item7]", "[item14, item12, item13]", "[item8, item13]", "item3", "item3");


INSERT INTO instructorSurveys
    (Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("Joe", "Hatch", "Yoga Gym", "Los Angeles", "CA", "item3", "[item4, item5]", "[item6, item8]", "[item3]", "[item3]", "[item3]", "[item1]");


INSERT INTO instructorSurveys
    (Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("Lindsay", "Fisher", "5th Street Yoga", "Queens", "NY", "item2", "[item3, item5]", "[item5, item6, item1]", "[item7]", "item9", "item3", "item1");


-- and mbo surveys

INSERT INTO instructorSurveys
    (Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("Mary", "Lori", "Clubville", "San Luis Obispo", "CA", "item4", "[item3, item2]", "[item2]", "[item14, item6, item7]", "item14", "item3", "[item1, item3]");

-- and mbo surveys

INSERT INTO instructorSurveys
    (Firstname, Lastname, studio, city, locState, q1, q2, q3, q4, q5, q6, q7)
values
    ("Johnny", "Salke", "Clubville", "San Luis Obispo", "CA", "item3", "[item4]", "item8", "item3", "item9", "item3", "item6");
-- and mbo surveys





-- need mbo profiles



-- MAKE SURE YOU HAVE THE MBO PROFILE!
-- FILL IN THE INSTRUCTOR PROFILES!!!!!
-- INSTRUCTOR PROFILE (to database and to page, make sure there are two methods in controller for bio and contact)

INSERT INTO instructorPro
    (Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4, q5, q6, goodie)
values
    ("Sarah", "Smith", "123@gmail.com", "(555) 555-5555", "Los Angeles, CA", "bliss.jpg", "q1", "q2", "q3", "q4", "q5", "q6", "www.yogamat.com");




--CLIENT PROFILE  (to database and to page, make sure there are two methods in controller for bio and contact)


INSERT INTO clientPro
    (Firstname, Lastname, email, phone, loc, img, q1, q2, q3, q4)
values
    ("Jane", "Smith", "456@gmail.com", "(888) 888-8888", "Los Angeles, CA", "smile.jpg", "q1", "q2", "q3", "q4");




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





