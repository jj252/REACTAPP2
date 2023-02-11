import reactLakeImg from '../assets/img/react-lake.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';

export const LOADED_QUESTIONS = [
    {
        id: 0,
        name: 'Question1',
        question: 'Which big cat is the largest',
        option1: 'Tiger',
        option2: 'Lion',
        option3: 'Jaguar',
        option4: 'Borneo Bay Cat',
        correct: 'Tiger'
    },
    {
        id: 0,
        name: 'Question2',
        question: 'Which is the only American Football team to go a whole season undefeated, including the Super Bowl?',
        option1: '1989 Sanfrancisco 49ers',
        option2: '1985 Chicago Bears',
        option3: '1972 Miami Dolphins',
        option4: '2007 New England Patriots',
        correct: '1972 Miami Dolphins'
    },
    {
        id: 2,
        name: 'Breadcrumb Trail Campground',
        image: breadCrumbImg,
        elevation: 2901,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Redux Woods Campground',
        image: reduxWoodsImg,
        elevation: 42,
        featured: true,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];
