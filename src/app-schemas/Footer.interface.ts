// Define the type for a single link object
export interface LinkItem {
  name: string;
  url: string;
  isHiring?: boolean;
}

// Define the type for the FooterLinks props
export interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}
