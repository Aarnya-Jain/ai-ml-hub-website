import { images } from '../config/images';

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
}

export const teamData = {
  facultyAdvisor: {
    name: 'Mr. Ashish Mishra',
    role: 'Faculty Advisor',
    email: 'Mishra.Ashish@mail.jiit.ac.in',
    imageUrl: images.team.facultyAdvisor,
  },
  seniorAdvisors: [
    {
      name: 'Dr. Jane Smith',
      role: 'Senior Advisor',
      email: 'jane.smith@university.edu',
      imageUrl: images.team.placeholders.female1,
    },
    {
      name: 'Dr. Robert Chen',
      role: 'Senior Advisor',
      email: 'robert.chen@university.edu',
      imageUrl: images.team.placeholders.male1,
    },
    {
      name: 'Dr. Maria Garcia',
      role: 'Senior Advisor',
      email: 'maria.garcia@university.edu',
      imageUrl: images.team.placeholders.female2,
    }
  ],
  coreTeam: {
    president: {
      name: 'Alex Johnson',
      role: 'President',
      email: 'alex.j@university.edu',
      imageUrl: images.team.placeholders.male3,
    },
    vicePresident: {
      name: 'Sarah Williams',
      role: 'Vice President',
      email: 'sarah.w@university.edu',
      imageUrl: images.team.placeholders.female2,
    },
    generalSecretary: {
      name: 'Michael Brown',
      role: 'General Secretary',
      email: 'michael.b@university.edu',
      imageUrl: images.team.placeholders.male2,
    },
    heads: {
      management: {
        name: 'Emily Davis',
        role: 'Management Head',
        email: 'emily.d@university.edu',
        imageUrl: images.team.placeholders.female3,
      },
      marketing: {
        name: 'David Wilson',
        role: 'Marketing Head',
        email: 'david.w@university.edu',
        imageUrl: images.team.placeholders.male1,
      },
      technical: [
        {
          name: 'Chris Anderson',
          role: 'Technical Head',
          email: 'chris.a@university.edu',
          imageUrl: images.team.placeholders.male3,
        },
        {
          name: 'Lisa Park',
          role: 'Technical Head',
          email: 'lisa.p@university.edu',
          imageUrl: images.team.placeholders.female3,
        },
        {
          name: 'James Wilson',
          role: 'Technical Head',
          email: 'james.w@university.edu',
          imageUrl: images.team.placeholders.male1,
        },
        {
          name: 'Emma Thompson',
          role: 'Technical Head',
          email: 'emma.t@university.edu',
          imageUrl: images.team.placeholders.female2,
        },
        {
          name: 'Daniel Lee',
          role: 'Technical Head',
          email: 'daniel.l@university.edu',
          imageUrl: images.team.placeholders.male2,
        },
        {
          name: 'Sophie Chen',
          role: 'Technical Head',
          email: 'sophie.c@university.edu',
          imageUrl: images.team.placeholders.female1,
        }
      ],
      digital: [
        {
          name: 'Rachel Green',
          role: 'Digital Head',
          email: 'rachel.g@university.edu',
          imageUrl: images.team.placeholders.female2,
        },
        {
          name: 'Tom Martinez',
          role: 'Digital Head',
          email: 'tom.m@university.edu',
          imageUrl: images.team.placeholders.male2,
        }
      ],
    },
  },
};