
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string; // Adicionado para linkar com a página de solução
  tag: string;
  deliverables: string[];
}

export interface TechTool {
  name: string;
  description: string;
  logo: React.FC<{ className?: string }>;
  gridClass: string;
}

export interface PortfolioProject {
  image: string;
  title: string;
  description: string;
  challenge: string;
  result: string;
}

export interface BlogPost {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string; // Full markdown content for the blog post page
}

export interface MethodologyStep {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SolutionFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Solution {
    slug: string;
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
    features: SolutionFeature[];
}