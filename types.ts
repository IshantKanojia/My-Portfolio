export interface Subject {
  name: string;
  icon: string;
  description: string;
}

export interface Friend {
  name: string;
  tagline: string;
  trait: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ParticleProps {
  color?: string;
  count?: number;
  size?: number;
  speed?: number;
}
