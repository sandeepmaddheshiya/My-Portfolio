import ccpp from "../assets/png/ccpp.png"
import flipkart from "../assets/png/flipkartgrid.webp"
import flutter from "../assets/png/flutter.jpg"
import javabasics from "../assets/png/javabasics.png"
import pythonbasics from "../assets/png/pythonbasics.png"
import pythonguvi from "../assets/png/pythonguvi.png"

export const achievementData = {
    bio : "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. - Alvin Toffler",
    achievements : [
        {
            id : 1,
            title : 'Cleared Java Basics',
            details : 'A Java basics test from HackerRank',
            date : 'January 2023',
            field : 'Coding',
            certificate: "https://www.hackerrank.com/certificates/99c1b3abe01f",
            image : javabasics
        },
        {
            id : 2,
            title : 'Flutter & Dart - The Complete Guide',
            details : 'A Flutter App development course from Udemy',
            date : 'January 2023',
            field : 'Learning',
            certificate: "https://www.udemy.com/certificate/UC-cb36cb90-38a4-46f8-bc74-da28aa124011/",
            image : flutter
          },
        {
            id : 3,
            title : 'Flipkart GRiD 5.0',
            details : 'Qualified for Level 1.2 in Flipkart GRiD 5.0 by Flipkart',
            date : 'January 2023',
            field : 'Coding',
            certificate: "https://drive.google.com/drive/folders/1KZf1Z5CPWKEsHAeaXunBeT1XaZd8-3Fh?usp=sharing",
            image : flipkart
        },
        {
            id : 4,
            title : 'Cleared Python Basics',
            details : 'A Python basics test from HackerRank',
            date : 'January 2023',
            field : 'Coding',
            certificate: "https://www.hackerrank.com/certificates/aeaecb88eec6",
            image : pythonbasics
         },
        {
            id : 5,
            title : 'Programming with C & C++',
            details : 'A complete fundamental course of C  & C++ by Internshala',
            date : 'January 2023',
            field : 'Learning',
            certificate: "https://trainings.internshala.com/view_certificate/A716E613-2197-586F-CB19-CF7A267AC45C/A6BCF2D8-D040-5272-4DB7-69DA08E0663E/",
            image : ccpp
        },
        {
            id : 6,
            title : 'Python Programming',
            details : 'A Python basics course by Guvi',
            date : 'January 2023',
            field : 'Learning',
            certificate: "https://www.guvi.in/share-certificate/C5uS66l1603w75Iy92",
            image : pythonguvi
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/