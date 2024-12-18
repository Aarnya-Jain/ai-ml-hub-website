export interface TeamMember {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
}

export interface TeamHeads {
  management: TeamMember;
  marketing: TeamMember;
  technical: TeamMember[];
  digital: TeamMember[];
}

export interface CoreTeam {
  president: TeamMember;
  vicePresident: TeamMember;
  generalSecretary: TeamMember;
  heads: TeamHeads;
}

export interface TeamData {
  facultyAdvisor: TeamMember;
  seniorAdvisors: TeamMember[];
  coreTeam: CoreTeam;
}