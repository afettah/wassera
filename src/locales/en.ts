export default {
  global: {
    learnMore: 'Learn More',
    getStarted: 'Get Started',
  },
  menu: {
    home: 'Home',
    about: 'About Wassera',
    services: 'Our Services',
    news: 'News',
    careers: 'Careers',
    contact: 'Contact Us',
  },
  home: {
    hero: {
      title: 'Unlock Effortless Mortgage Solutions',
      description:
        'Take control of your financial future with tailored mortgage, investment, and savings services designed to maximize the value of your assets through easy-to-access collateralized loans.',
      button: {
        started: 'Get Started',
        more: 'Learn More',
      },
      registration: {
        button: 'Get Started',
        modalTitle: 'Join the Adventure with Us!',
        message1: 'Dear customer, thank you for choosing us! We will announce Waseera investment services very soon.',
        message2: 'Join our waiting list for exclusive early access benefits.',
        fields: {
          firstName: {
            label: 'First Name',
          },
          lastName: {
            label: 'Last Name',
          },
          email: {
            label: 'Email',
          },
          phone: {
            label: 'Phone',
          },
          serviceType: {
            label: 'Service Type',
            description: 'Select the service(s) you’re interested in to explore with Waseer',
            options: {
              mortgageSplit: {
                label: 'Mortgage Split',
                description: 'Mortgage Split divides your mortgage with flexible terms and rates.',
              },
              investments: {
                label: 'Investments',
                description: 'Investments grow your financial inclusion with equity options.',
              },
              assetBackedLoan: {
                label: 'Asset-Backed Loan',
                description: 'Asset-Backed Loan offers flexible funding secured by collateral.',
              },
              savings: {
                label: 'Savings',
                description: 'Savings helps you grow and manage funds efficiently.',
              },
            },
          },
        },
        submit: 'Submit',
        success: {
          title: 'Thank you for your submission!',
          description: 'Your request has been successfully submitted. We will contact you shortly.',
        },
      },
    },
    info: {
      vision: {
        title: 'Our Vision',
        description: 'To be the first choice in the debt industry for monetizing locked capital and untapped assets',
      },
      mission: {
        title: 'Our Mission',
        description:
          'To optimize the use of technological advances providing new opportunities to give citizens and market participants access to untapped assets.',
      },
      wassera: {
        title: 'Why Wassera ?',
        description:
          'Our main product Is a user-friendly platform that unlocks the value of assets and offers investments and savings services through collateralized mortgage loans.',
      },
    },
    offers: {
      title: {
        line1: 'Do you know about',
        line2: 'Offers ?',
      },
      list: [
        'We leverage cutting-edge technology to enable both individuals and corporations to monetize their untapped assets through innovative financial products.',
        'Providing fast, secure, and accessible financial serices. Allowing customers to unlock the equity in their assets, bypassing the bureaucratic hurdles of traditional banking.',
        'lower customers burden ratio (income Deduction )',
        'Higher Credit Scoring',
        'Augment customers solvency',
        'Clear Off Balance Sheet liabilities for Assets capitalization',
      ],
    },
    statistics: {
      title: 'Mortgage Market Values in Saudi Arabia',
      totalMortgageValue: 'Total Mortgage Value',
      averageMortgageValue: 'Average Mortgage Value',
      activeMortgages: 'Active Mortgages',
      mortageCount: 'Mortgages in 2024',
      billion: 'Bn',
      million: 'Mn',
      plus: '+',
      k: 'K',
    },
    partnerships: {
      title: 'Partnerships',
      description: 'Our relationships prepare businesses for the future. We work with a trusted, select group of partners.',
    },
  },
  footer: {
    contacts: 'Contacts',
    address: '7134 Al-Rayyan District, Al-Nafal District, Riyadh 13312 Kingdom of Saudi Arabia',
    description: 'The leading fintech solution that uses nft, ai, and blockchain technologies to unlock the value of untapped equities.',
    security: 'Security',
    privacy: 'Privacy Policy',
    rights: 'All Rights Reserved © Waseera 2024',
  },
} as const;
