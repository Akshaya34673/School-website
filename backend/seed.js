const mongoose = require('mongoose');

// Models
const Faculty = require('./models/Faculty');
const FeeStructure = require('./models/FeeStructure');
const Contact = require('./models/Contact');
const Club = require('./models/Club');
const Admission = require('./models/Admission');
const Event = require('./models/Event');
const Facility = require('./models/Facility');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/school')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const seedData = async () => {
  try {
    // Clear existing data
    await Faculty.deleteMany({});
    await FeeStructure.deleteMany({});
    await Contact.deleteMany({});
    await Club.deleteMany({});
    await Admission.deleteMany({});
    await Event.deleteMany({});
    await Facility.deleteMany({});

    // Insert data into Faculty
    await Faculty.create([
      { name: 'Dr. John Smith', subject: 'Physics', qualification: 'PhD' },
      { name: 'Ms. Emily Clark', subject: 'Mathematics', qualification: 'MSc' },
      { name: 'Mr. Robert Brown', subject: 'History', qualification: 'MA' },
    ]);

    // Insert data into FeeStructure
    await FeeStructure.create([
      { grade: 'Grade 1', fee: 20000 },
      { grade: 'Grade 2', fee: 22000 },
      { grade: 'Grade 3', fee: 25000 },
    ]);

    // Insert data into Contact
    await Contact.create([
      { name: 'Akshay Kumar', email: 'akshay@example.com', subject: 'Admissions', message: 'Interested in admissions' },
      { name: 'Anita Desai', email: 'anita@example.com', subject: 'Fee Details', message: 'Need fee structure details' },
    ]);

    // Insert data into Club
    await Club.create([
      { name: 'Robotics Club', description: 'Explore and build innovative robots', image: 'robotics.jpg' },
      { name: 'Drama Club', description: 'Perform and appreciate theatre arts', image: 'drama.jpg' },
    ]);

    // Insert data into Admission
    await Admission.create([
      {
        studentName: 'Ravi Kumar',
        grade: 'Grade 1',
        age: 6,
        criteria: 'Minimum age 6, must clear entrance test',
        status: 'Pending',
      },
      {
        studentName: 'Priya Sharma',
        grade: 'Grade 2',
        age: 7,
        criteria: 'Minimum age 7, must clear interview',
        status: 'Approved',
      },
    ]);

    // Insert data into Event
    await Event.create([
      { name: 'Science Fair', date: '2024-02-20', description: 'Showcase scientific innovations' },
      { name: 'Sports Day', date: '2024-03-15', description: 'Annual sports event' },
    ]);

    // Insert data into Facility
    await Facility.create([
      { name: 'Library', description: 'State-of-the-art library with 5000+ books', image: 'library.jpg' },
      { name: 'Sports Complex', description: 'Indoor and outdoor sports facilities', image: 'sports-complex.jpg' },
    ]);

    console.log('Data inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error inserting data:', err);
    process.exit(1);
  }
};

seedData();
