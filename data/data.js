const dummyDoctors = [
  {
    name: 'Dr. John Smith',
    email: 'john.smith@example.com',
    phoneNo: '123-456-7890',
    password: 'password123',
    dob: new Date('1980-05-15'),
    imageUrl:
      'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    degree: 'MD',
    specialization: 'Cardiology',
    registrationNo: 'MD12345',
    registrationAuthority: 'Medical Board',
    experience: 10,
    address: '123 Main Street, Cityville'
  },
  {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phoneNo: '987-654-3210',
    password: 'doctorpass',
    dob: new Date('1975-08-20'),
    imageUrl:
      'https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope-isolated-grey_651396-974.jpg?w=996&t=st=1696514715~exp=1696515315~hmac=dc60a9b1e25252baf356de36828769bd52b7022c5d37c90872423f0a5dbfa8b0',
    degree: 'MBBS',
    specialization: 'Dermatology',
    registrationNo: 'MBBS67890',
    registrationAuthority: 'Medical Council',
    experience: 15,
    address: '456 Elm Street, Townsville'
  },
  {
    name: 'Dr. Emily Davis',
    email: 'emily.davis@example.com',
    phoneNo: '555-123-7890',
    password: 'securepass',
    dob: new Date('1990-03-10'),
    imageUrl:
      'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=996&t=st=1696514992~exp=1696515592~hmac=0ad7b38f57d80b72e5a582df6622c001603a4b72d64831e6d60d06aef1826ee2',
    degree: 'DDS',
    specialization: 'Dentistry',
    registrationNo: 'DDS54321',
    registrationAuthority: 'Dental Board',
    experience: 8,
    address: '789 Oak Avenue, Villageton'
  },
  {
    name: 'Dr. Michael Wilson',
    email: 'michael.wilson@example.com',
    phoneNo: '222-333-4444',
    password: 'mike123',
    dob: new Date('1972-12-05'),
    imageUrl:
      'https://media.istockphoto.com/id/1420317532/photo/a-female-doctor-smiling-in-her-uniform.jpg?s=2048x2048&w=is&k=20&c=HRj-35W7ZexnATgqAa2alA5t-XAkETkhU-AQlbr8m94=',
    degree: 'Ph.D.',
    specialization: 'Psychiatry',
    registrationNo: 'PhD6789',
    registrationAuthority: 'Psychiatric Association',
    experience: 20,
    address: '101 Pine Lane, Hamletville'
  },
  {
    name: 'Dr. Lisa Adams',
    email: 'lisa.adams@example.com',
    phoneNo: '777-888-9999',
    password: 'lisa789',
    dob: new Date('1985-07-25'),
    imageUrl:
      'https://img.freepik.com/free-photo/indian-doctor-receives-patient-tells-him-about-results-tests-medicine-health_496169-2765.jpg?w=996&t=st=1696538109~exp=1696538709~hmac=5743b059367faa18d6bc8c37b340f118cf67bda145379524e75075d04f3250c3',
    degree: 'DO',
    specialization: 'Orthopedics',
    registrationNo: 'DO54321',
    registrationAuthority: 'Medical Board',
    experience: 12,
    address: '222 Cedar Road, Suburbia'
  },
  {
    name: 'Dr. James Brown',
    email: 'james.brown@example.com',
    phoneNo: '333-555-7777',
    password: 'jamespass',
    dob: new Date('1978-11-15'),
    imageUrl:
      'https://img.freepik.com/free-photo/male-nurse-tired-after-long-shift-hospital_23-2148535638.jpg?w=826&t=st=1696538123~exp=1696538723~hmac=b1315872282c91973b4214b9b630e0289f4d3b1f0e403b3d29918746dcbde6df',
    degree: 'MD',
    specialization: 'Pediatrics',
    registrationNo: 'MD98765',
    registrationAuthority: 'Medical Council',
    experience: 18,
    address: '333 Maple Street, Riverside'
  },
  {
    name: 'Dr. Jennifer Lee',
    email: 'jennifer.lee@example.com',
    phoneNo: '999-111-2222',
    password: 'jen123',
    dob: new Date('1982-09-30'),
    imageUrl:
      'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=996&t=st=1696538138~exp=1696538738~hmac=f81b5f685a85a2b8e9702846f82af03494bf81478d2b2e20bd5dfb4e5814a1db',
    degree: 'DDS',
    specialization: 'Dentistry',
    registrationNo: 'DDS23456',
    registrationAuthority: 'Dental Board',
    experience: 10,
    address: '456 Willow Lane, Lakeside'
  },
  {
    name: 'Dr. Robert Johnson',
    email: 'robert.johnson@example.com',
    phoneNo: '111-222-3333',
    password: 'rob456',
    dob: new Date('1970-02-18'),
    imageUrl:
      'https://img.freepik.com/free-photo/doctors-day-cute-young-handsome-man-lab-coat-glasses-smiling-holding-book_140725-162884.jpg?w=996&t=st=1696538150~exp=1696538750~hmac=6a9cfb2fbba1c0cde34c28390e3963e4e3ebee62d059758e56d0d9725b64bf3e',
    degree: 'MD',
    specialization: 'Internal Medicine',
    registrationNo: 'MD56789',
    registrationAuthority: 'Medical Board',
    experience: 25,
    address: '789 Birch Street, Mountainview'
  },
  {
    name: 'Dr. Maria Martinez',
    email: 'maria.martinez@example.com',
    phoneNo: '444-666-8888',
    password: 'maria789',
    dob: new Date('1987-06-08'),
    imageUrl:
      'https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?w=996&t=st=1696538173~exp=1696538773~hmac=b5d01d3db4fe26dd1e6c71f588ef52443b9f20009f18c3ce6290556f898b5e75',
    degree: 'DO',
    specialization: 'Ophthalmology',
    registrationNo: 'DO12345',
    registrationAuthority: 'Medical Council',
    experience: 14,
    address: '999 Elm Street, Hillside'
  },
  {
    name: 'Dr. William Clark',
    email: 'william.clark@example.com',
    phoneNo: '777-999-1111',
    password: 'william123',
    dob: new Date('1984-04-12'),
    imageUrl:
      'https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic_1258-57360.jpg?w=996&t=st=1696538190~exp=1696538790~hmac=79e3bc9e39ac4261c754f3ae13223a618f77532331ee39ae3927682ba7cdd51f',
    degree: 'MD',
    specialization: 'Surgery',
    registrationNo: 'MD34567',
    registrationAuthority: 'Medical Board',
    experience: 16,
    address: '123 Oak Avenue, Countryside'
  }
]

const dummyUsers = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNo: '123-456-7890',
    password: 'password123',
    dob: new Date('1990-05-15'),
    address: '123 Main Street, Cityville'
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNo: '987-654-3210',
    password: 'smithpass',
    dob: new Date('1985-08-20'),
    address: '456 Elm Street, Townsville'
  },
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phoneNo: '555-123-7890',
    password: 'alicepass',
    dob: new Date('1995-03-10'),
    address: '789 Oak Avenue, Villageton'
  },
  {
    name: 'Bob Wilson',
    email: 'bob.wilson@example.com',
    phoneNo: '222-333-4444',
    password: 'bob123',
    dob: new Date('1980-12-05'),
    address: '101 Pine Lane, Hamletville'
  },
  {
    name: 'Sarah Adams',
    email: 'sarah.adams@example.com',
    phoneNo: '777-888-9999',
    password: 'sarahpass',
    dob: new Date('1992-07-25'),
    address: '222 Cedar Road, Suburbia'
  },
  {
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phoneNo: '333-555-7777',
    password: 'mikepass',
    dob: new Date('1988-11-15'),
    address: '333 Maple Street, Riverside'
  },
  {
    name: 'Emily Lee',
    email: 'emily.lee@example.com',
    phoneNo: '999-111-2222',
    password: 'emilypass',
    dob: new Date('1993-09-30'),
    address: '456 Willow Lane, Lakeside'
  },
  {
    name: 'Robert Martinez',
    email: 'robert.martinez@example.com',
    phoneNo: '111-222-3333',
    password: 'robertpass',
    dob: new Date('1982-02-18'),
    address: '789 Birch Street, Mountainview'
  },
  {
    name: 'Maria Clark',
    email: 'maria.clark@example.com',
    phoneNo: '444-666-8888',
    password: 'mariapass',
    dob: new Date('1991-06-08'),
    address: '999 Elm Street, Hillside'
  },
  {
    name: 'William Johnson',
    email: 'william.johnson@example.com',
    phoneNo: '777-999-1111',
    password: 'williampass',
    dob: new Date('1989-04-12'),
    address: '123 Oak Avenue, Countryside'
  }
]

module.exports = { dummyDoctors, dummyUsers }
