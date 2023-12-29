export class Contact {
  image!: string | undefined;
  name!: string;
  surname!: string;
  number!: number | null;
  mail!: string;
  address!: string;
  //   [key: string]: any;
  constructor(
    image = '',
    name = '',
    surname = '',
    number = null,
    mail = '',
    address = ''
  ) {
    this.image = image;
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.mail = mail;
    this.address = address;
  }
}
