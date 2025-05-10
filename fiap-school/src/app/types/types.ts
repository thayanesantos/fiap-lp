export type NavbarItem<T> = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  extra?: T;
};

export type NavbarProps<T> = {
  brand?: React.ReactNode;
  items?: NavbarItem<T>[];
};