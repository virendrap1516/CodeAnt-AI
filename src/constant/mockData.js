import home from "../assets/home.svg";
import code from "../assets/code.svg";
import setting from "../assets/gear.svg";
import book from "../assets/book.svg";
import github from "../assets/github.svg";
import azure from "../assets/azure.svg";
import bitBucket from "../assets/bitbucket.svg";
import gitlab from "../assets/gitlab.svg";


import cloud from "../assets/cloud.svg";

export const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updatedAt: "Updated 1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "JavaScript",
    size: "5871 KB",
    updatedAt: "Updated 2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updatedAt: "Updated 5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "Updated 3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    updatedAt: "Updated 6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "Updated 4 days ago",
  },
  {
    name: "social-network",
    visibility: "Public",
    language: "PHP",
    size: "5432 KB",
    updatedAt: "Updated 7 days ago",
  },
];

export const menuItems = [
  {
    icon: home,
    label: "Repositories",
    isActive: true,
  },
  {
    icon: code,
    label: "AI Code Review",
    isActive: false,
  },
  {
    icon: cloud,
    label: "Cloud Security",
    isActive: false,
  },
  {
    icon: book,
    label: "How to Use",
    isActive: false,
  },
  {
    icon: setting,
    label: "Settings",
    isActive: false,
  },
];

export const signInOptions = [
  {
    text: "Sign in with GitHub",
    icon: github,
  },
  {
    text: "Sign in with Bitbucket",
    icon: bitBucket,
  },
  {
    text: "Sign in with Azure DevOps",
    icon: azure,
  },
  {
    text: "Sign in with GitLab",
    icon: gitlab,
  },
];
