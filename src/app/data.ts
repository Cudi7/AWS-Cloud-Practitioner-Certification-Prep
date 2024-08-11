export type Question = {
  question: string;
  options: string[];
  answer: string | string[];
  explanation: string;
  multiSelect: boolean;
};

export const questions: Question[] = [
  {
    question:
      "1. Which AWS service will help a company identify the user who deleted an Amazon EC2 instance yesterday?",
    options: [
      "A. Amazon CloudWatch",
      "B. AWS Trusted Advisor",
      "C. AWS CloudTrail",
      "D. Amazon Inspector",
    ],
    answer: "C. AWS CloudTrail",
    explanation:
      "AWS CloudTrail is a service that enables you to track user activity and API usage across your AWS account, essential for identifying specific actions such as deleting an EC2 instance.",
    multiSelect: false,
  },
  {
    question:
      "2. A company needs a content delivery network that provides secure data, video, application, and API delivery to users globally with low latency and high transfer speeds. Which AWS service meets these requirements?",
    options: [
      "A. Amazon CloudFront",
      "B. Elastic Load Balancing",
      "C. Amazon S3",
      "D. Amazon Elastic Transcoder",
    ],
    answer: "A. Amazon CloudFront",
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that integrates with other AWS services to deliver content with low latency and high transfer speeds globally.",
    multiSelect: false,
  },
  {
    question:
      "3. Amazon Elastic File System (Amazon EFS) and Amazon FSx offer which type of storage?",
    options: [
      "A. File storage",
      "B. Object storage",
      "C. Block storage",
      "D. Instance storage",
    ],
    answer: "A. File storage",
    explanation:
      "Both Amazon EFS and Amazon FSx offer file storage solutions, enabling simultaneous access to files and folders over a network.",
    multiSelect: false,
  },
  {
    question:
      "4. A retail company is migrating its IT infrastructure from an on-premises data center to the AWS Cloud. What costs will the company eliminate with this migration? (Select TWO.)",
    options: [
      "A. Cost of data center operations",
      "B. Cost of application licensing",
      "C. Cost of marketing campaigns",
      "D. Cost of physical server hardware",
      "E. Cost of network management",
    ],
    answer: [
      "A. Cost of data center operations",
      "D. Cost of physical server hardware",
    ],
    explanation:
      "By migrating to the AWS Cloud, the company can eliminate costs associated with data center operations and physical server hardware.",
    multiSelect: true,
  },
  {
    question:
      "5. Which of the following acts as a firewall at the instance level to control inbound and outbound access?",
    options: [
      "A. Network access control list",
      "B. Security groups",
      "C. AWS Trusted Advisor",
      "D. Virtual private gateways",
    ],
    answer: "B. Security groups",
    explanation:
      "Security groups act as firewalls at the instance level, allowing you to control inbound and outbound access for Amazon EC2 instances.",
    multiSelect: false,
  },
  {
    question: "6. An Availability Zone consists of:",
    options: [
      "A. One or more data centers in a single location",
      "B. Two or more data centers in multiple locations",
      "C. One or more physical hosts in a single data center",
      "D. Two or more physical hosts in multiple data centers",
    ],
    answer: "A. One or more data centers in a single location",
    explanation:
      "An Availability Zone in AWS consists of one or more isolated data centers within a region, each with independent power, cooling, and physical security.",
    multiSelect: false,
  },
  {
    question:
      "7. Which of the following are AWS cloud design principles? (Select TWO.)",
    options: [
      "A. Pay for compute resources upfront",
      "B. Make data-driven decisions to determine cloud architectural design",
      "C. Emphasize manual processes to enable frequent changes",
      "D. Test systems at production scale",
      "E. Refine operational procedures infrequently",
    ],
    answer: [
      "B. Make data-driven decisions to determine cloud architectural design",
      "D. Test systems at production scale",
    ],
    explanation:
      "Making data-driven decisions and testing systems at production scale are AWS cloud design principles that help build secure, efficient, and operationally sound systems.",
    multiSelect: true,
  },
  {
    question:
      "8. Which AWS tool or service provides recommendations to help users get right-sized Amazon EC2 instances based on the workload's historical usage data?",
    options: [
      "A. AWS Pricing Calculator",
      "B. AWS Compute Optimizer",
      "C. AWS App Runner",
      "D. AWS Systems Manager",
    ],
    answer: "B. AWS Compute Optimizer",
    explanation:
      "AWS Compute Optimizer provides recommendations to help users get right-sized Amazon EC2 instances based on the workload's historical usage data.",
    multiSelect: false,
  },
  {
    question:
      "9. Which tasks are AWS responsibilities according to the AWS Shared Responsibility Model? (Select TWO.)",
    options: [
      "A. Patching AWS networking devices",
      "B. Defining user password policies",
      "C. Providing physical security for compute resources",
      "D. Configuring security groups",
      "E. Patching an Amazon EC2 instance operating system",
    ],
    answer: [
      "A. Patching AWS networking devices",
      "C. Providing physical security for compute resources",
    ],
    explanation:
      "Patching AWS networking devices and providing physical security for compute resources are tasks that are AWS responsibilities.",
    multiSelect: true,
  },
  {
    question:
      "10. An IT team is managing clusters of MySQL database servers. The team has to patch the database and take backup snapshots of the data in the clusters. The company wants to move this workload to AWS so that these tasks are completed automatically. What should the company do to meet these requirements?",
    options: [
      "A. Deploy MySQL database server clusters on Amazon EC2 instances",
      "B. Use Amazon RDS with a MySQL database",
      "C. Use an AWS CloudFormation template to deploy MySQL database servers on Amazon EC2 instances",
      "D. Migrate all MySQL database data to Amazon S3",
    ],
    answer: "B. Use Amazon RDS with a MySQL database",
    explanation:
      "Using Amazon RDS with a MySQL database enables automating tasks such as patching and backups.",
    multiSelect: false,
  },
  {
    question:
      "11. A company has a workload that requires data to be collected, analyzed, and stored on premises. The company wants to extend the use of AWS services to function on premises with access to the company's network and the company's VPC. Which AWS service meets this requirement?",
    options: [
      "A. AWS Outposts",
      "B. AWS Storage Gateway",
      "C. AWS Direct Connect",
      "D. AWS Snowball",
    ],
    answer: "A. AWS Outposts",
    explanation:
      "AWS Outposts allows running AWS services on premises, extending AWS to physical environments while maintaining a consistent cloud experience.",
    multiSelect: false,
  },
  {
    question:
      "12. A company is building a serverless architecture that connects application data from multiple data sources. The company needs a solution that does not require additional code. Which AWS service meets these requirements?",
    options: [
      "A. AWS Lambda",
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "C. Amazon CloudWatch",
      "D. Amazon EventBridge",
    ],
    answer: "D. Amazon EventBridge",
    explanation:
      "Amazon EventBridge is a serverless solution that makes it easy to connect application data from multiple sources without requiring additional code.",
    multiSelect: false,
  },
  {
    question:
      "13. A company deploys its application on Amazon EC2 instances. The application occasionally experiences sudden increases in demand. The company wants to ensure that its application can respond to changes in demand with the least possible cost. Which AWS service or tool will meet these requirements?",
    options: [
      "A. AWS Auto Scaling",
      "B. AWS Compute Optimizer",
      "C. AWS Cost Explorer",
      "D. AWS Well-Architected Framework",
    ],
    answer: "A. AWS Auto Scaling",
    explanation:
      "AWS Auto Scaling helps ensure the application can meet sudden increases in demand cost-effectively.",
    multiSelect: false,
  },
  {
    question:
      "14. Which of the following are advantages of the AWS Cloud? (Select TWO.)",
    options: [
      "A. Trade variable expense for capital expense",
      "B. Massive economies of scale",
      "C. Launch globally in minutes",
      "D. Focus on managing hardware infrastructure",
      "E. Overprovision to ensure capacity",
    ],
    answer: ["B. Massive economies of scale", "C. Launch globally in minutes"],
    explanation:
      "The AWS Cloud provides massive economies of scale and the ability to launch resources globally in minutes.",
    multiSelect: true,
  },
  {
    question:
      "15. Which tasks are customer responsibilities according to the AWS Shared Responsibility Model? (Select TWO.)",
    options: [
      "A. Determine application dependencies on operating systems",
      "B. Provide user access with AWS Identity and Access Management (IAM)",
      "C. Ensure physical security of data center in an Availability Zone",
      "D. Patch the hypervisor",
      "E. Ensure network availability across Availability Zones",
    ],
    answer: [
      "A. Determine application dependencies on operating systems",
      "B. Provide user access with AWS Identity and Access Management (IAM)",
    ],
    explanation:
      "Determining application dependencies and providing user access using AWS IAM are customer responsibilities per the AWS Shared Responsibility Model.",
    multiSelect: true,
  },
  {
    question:
      "16. Which of the following promotes AWS Cloud architectural best practices for designing and operating reliable, secure, efficient, and cost-effective systems?",
    options: [
      "A. AWS Serverless Application Model framework",
      "B. AWS Business Support",
      "C. Principle of least privilege",
      "D. AWS Well-Architected Framework",
    ],
    answer: "D. AWS Well-Architected Framework",
    explanation:
      "The AWS Well-Architected Framework promotes AWS Cloud architectural best practices to help design and operate systems that are reliable, secure, efficient, and cost-effective.",
    multiSelect: false,
  },
  {
    question:
      "17. Using Amazon Elastic Container Service (Amazon ECS) to break a monolithic architecture into microservices is an example of:",
    options: [
      "A. A loosely coupled architecture",
      "B. A tightly coupled architecture",
      "C. A stateless architecture",
      "D. A stateful architecture",
    ],
    answer: "A. A loosely coupled architecture",
    explanation:
      "Using Amazon ECS to break a monolithic architecture into microservices is an example of a loosely coupled architecture, where components are independent and communicate through well-defined interfaces.",
    multiSelect: false,
  },
  {
    question:
      "18. A company transfers its infrastructure from on premises to the AWS Cloud. Now, the company can provision additional Amazon EC2 instances whenever needed. With this capability, the company can launch new marketing campaigns in 3 days instead of 3 weeks. Which benefit of the AWS Cloud does this scenario demonstrate?",
    options: [
      "A. Cost savings",
      "B. Improved operational resilience",
      "C. Increased business agility",
      "D. Enhanced security",
    ],
    answer: "C. Increased business agility",
    explanation:
      "This scenario demonstrates increased business agility as a benefit of the AWS Cloud, enabling the company to quickly respond to market needs and launch marketing campaigns significantly faster.",
    multiSelect: false,
  },
  {
    question:
      "19. A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing their existing backup workflows. Which AWS service should the company use to meet these requirements?",
    options: [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. AWS Storage Gateway",
      "C. Amazon Elastic Container Service (Amazon ECS)",
      "D. AWS Lambda",
    ],
    answer: "B. AWS Storage Gateway",
    explanation:
      "The company should use AWS Storage Gateway, specifically the Tape Gateway option, to integrate their existing backup workflows with AWS without the need for significant changes, allowing for efficient backup to the cloud.",
    multiSelect: false,
  },
  {
    question:
      "20. A company needs to continuously monitor its environment to analyze network and account activity and identify potential security threats. Which AWS service should the company use to meet these needs?",
    options: [
      "A. AWS Artifact",
      "B. Amazon Macie",
      "C. AWS Identity and Access Management (IAM)",
      "D. Amazon GuardDuty",
    ],
    answer: "D. Amazon GuardDuty",
    explanation:
      "Amazon GuardDuty is a service that provides threat detection and continuous monitoring for the AWS environment, analyzing network and account activity to identify anomalous or unauthorized behavior.",
    multiSelect: false,
  },
  {
    question:
      "21. A cloud engineer wants to know the percentage of allocated compute units that are in use for a specific Amazon EC2 instance. Which AWS service can provide this information?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS Artifact",
    ],
    answer: "C. Amazon CloudWatch",
    explanation:
      "Amazon CloudWatch can provide detailed metrics about Amazon EC2 instance utilization, including the percentage of allocated compute units in use, allowing users to monitor and optimize performance.",
    multiSelect: false,
  },
  {
    question:
      "22. Which AWS service or feature is used for troubleshooting network connectivity between Amazon EC2 instances?",
    options: [
      "A. AWS Certificate Manager (ACM)",
      "B. Internet Gateway",
      "C. VPC Flow Logs",
      "D. AWS CloudHSM",
    ],
    answer: "C. VPC Flow Logs",
    explanation:
      "VPC Flow Logs enables users to capture information about the IP traffic flowing to and from network interfaces in their VPC, aiding in troubleshooting network connectivity between Amazon EC2 instances.",
    multiSelect: false,
  },
  {
    question: "23. Which AWS service provides highly durable object storage?",
    options: [
      "A. Amazon S3",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon FSx",
    ],
    answer: "A. Amazon S3",
    explanation:
      "Amazon S3 provides highly durable object storage, designed to store and retrieve any amount of data from anywhere, offering scalability, security, durability, and high availability.",
    multiSelect: false,
  },
  {
    question:
      "24. Which AWS service or feature gives users the ability to provision a dedicated private network connection from their internal network to AWS?",
    options: [
      "A. AWS CloudHSM",
      "B. AWS Direct Connect",
      "C. AWS VPN",
      "D. Amazon Connect",
    ],
    answer: "B. AWS Direct Connect",
    explanation:
      "AWS Direct Connect allows users to establish a dedicated private network connection from their internal network to AWS, which can reduce network costs, increase bandwidth, and provide a more consistent connection than internet-based connections.",
    multiSelect: false,
  },
  {
    question:
      "25. A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing their existing backup workflows. Which AWS service should the company use to meet these requirements?",
    options: [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. AWS Storage Gateway",
      "C. Amazon Elastic Container Service (Amazon ECS)",
      "D. AWS Lambda",
    ],
    answer: "B. AWS Storage Gateway",
    explanation:
      "The company should use AWS Storage Gateway, specifically the Tape Gateway option, to integrate their existing backup workflows with AWS without the need for significant changes, allowing for efficient backup to the cloud.",
    multiSelect: false,
  },
  {
    question:
      "26. A company needs to continuously monitor its environment to analyze network and account activity and identify potential security threats. Which AWS service should the company use to meet these needs?",
    options: [
      "A. AWS Artifact",
      "B. Amazon Macie",
      "C. AWS Identity and Access Management (IAM)",
      "D. Amazon GuardDuty",
    ],
    answer: "D. Amazon GuardDuty",
    explanation:
      "Amazon GuardDuty is a service that provides threat detection and continuous monitoring for the AWS environment, analyzing network and account activity to identify anomalous or unauthorized behavior.",
    multiSelect: false,
  },
  {
    question:
      "27. A cloud engineer wants to know the percentage of allocated compute units that are in use for a specific Amazon EC2 instance. Which AWS service can provide this information?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS Artifact",
    ],
    answer: "C. Amazon CloudWatch",
    explanation:
      "Amazon CloudWatch can provide detailed metrics about Amazon EC2 instance utilization, including the percentage of allocated compute units in use, allowing users to monitor and optimize performance.",
    multiSelect: false,
  },
  {
    question:
      "28. Which AWS service or feature is used for troubleshooting network connectivity between Amazon EC2 instances?",
    options: [
      "A. AWS Certificate Manager (ACM)",
      "B. Internet Gateway",
      "C. VPC Flow Logs",
      "D. AWS CloudHSM",
    ],
    answer: "C. VPC Flow Logs",
    explanation:
      "VPC Flow Logs enables users to capture information about the IP traffic flowing to and from network interfaces in their VPC, aiding in troubleshooting network connectivity between Amazon EC2 instances.",
    multiSelect: false,
  },
  {
    question: "29. Which AWS service provides highly durable object storage?",
    options: [
      "A. Amazon S3",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon FSx",
    ],
    answer: "A. Amazon S3",
    explanation:
      "Amazon S3 provides highly durable object storage, designed to store and retrieve any amount of data from anywhere, offering scalability, security, durability, and high availability.",
    multiSelect: false,
  },
  {
    question:
      "30. A company wants its Amazon EC2 instances to operate in a highly available environment, even in case of a natural disaster in a specific geographic area. Which solution achieves this goal?",
    options: [
      "A. Use EC2 instances in a single Availability Zone",
      "B. Use EC2 instances across multiple AWS Regions",
      "C. Use EC2 instances across multiple edge locations",
      "D. Use Amazon CloudFront with the EC2 instances configured as the origin",
    ],
    answer: "B. Use EC2 instances across multiple AWS Regions",
    explanation:
      "Operating Amazon EC2 instances across multiple AWS Regions can ensure high availability and service continuity even in the event of a failure or natural disaster in a specific geographic area.",
    multiSelect: false,
  },
  {
    question:
      "31. Which AWS service should a cloud engineer use to visualize API calls to AWS services?",
    options: [
      "A. Amazon CloudWatch",
      "B. AWS CloudTrail",
      "C. AWS Config",
      "D. AWS Artifact",
    ],
    answer: "B. AWS CloudTrail",
    explanation:
      "AWS CloudTrail is the service that allows users to record, monitor, and retain events related to API calls across their AWS account, providing visibility into user activity and operations performed within their AWS account.",
    multiSelect: false,
  },
  {
    question:
      "32. A company needs to configure rules to identify threats and protect applications from malicious access on the network. Which AWS service should the company use to meet these requirements?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. Amazon QuickSight",
      "C. AWS WAF",
      "D. Amazon Detective",
    ],
    answer: "C. AWS WAF",
    explanation:
      "AWS WAF is the service that allows users to create customized rules to block malicious traffic patterns and protect their applications from common web threats.",
    multiSelect: false,
  },
  {
    question:
      "33. A company wants to migrate its on-premises relational data warehouse to AWS. The information in the data warehouse is used to feed analytics dashboards. Which AWS service should the company use for the data warehouse?",
    options: [
      "A. Amazon ElastiCache",
      "B. Amazon Aurora",
      "C. Amazon RDS",
      "D. Amazon Redshift",
    ],
    answer: "D. Amazon Redshift",
    explanation:
      "Amazon Redshift is the AWS data warehousing service, specifically designed for analytics of large volumes of data and ideal for feeding analytics dashboards with large datasets.",
    multiSelect: false,
  },
  {
    question:
      "34. A company wants to host its relational databases on AWS. The databases have predefined schemas that the company needs to replicate in AWS. Which AWS services could the company use for the databases? (Select TWO.)",
    options: [
      "A. Amazon Aurora",
      "B. Amazon RDS",
      "C. Amazon DocumentDB (with MongoDB compatibility)",
      "D. Amazon Neptune",
      "E. Amazon DynamoDB",
    ],
    answer: ["A. Amazon Aurora", "B. Amazon RDS"],
    explanation:
      "Amazon Aurora and Amazon RDS are AWS services that offer solutions for hosting relational databases with predefined schemas, providing the ability to replicate, scale, and manage these databases efficiently.",
    multiSelect: true,
  },
  {
    question:
      "35. A retail company is building a new mobile application. The company is evaluating whether to build the application in an on-premises data center or in the AWS Cloud. Which service should the company consider?",
    options: [
      "A. Amazon FSx for Windows File Server",
      "B. Amazon WorkSpaces virtual Windows desktop",
      "C. AWS Directory Service for Microsoft Active Directory",
      "D. Amazon RDS for Microsoft SQL Server",
    ],
    answer: "C. AWS Directory Service for Microsoft Active Directory",
    explanation:
      "AWS Directory Service for Microsoft Active Directory allows the company to utilize a managed service for Active Directory in AWS, making it easier to integrate and manage users and security resources for the new mobile application.",
    multiSelect: false,
  },
  {
    question:
      "36. Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Select TWO.)",
    options: [
      "A. Perform operations as code",
      "B. Enable traceability",
      "C. Automatically scale to meet demand",
      "D. Deploy resources globally to improve response time",
      "E. Automatically recover from failure",
    ],
    answer: [
      "C. Automatically scale to meet demand",
      "E. Automatically recover from failure",
    ],
    explanation:
      "The principles of automatically scaling to meet demand and automatically recovering from failure support the reliability pillar of the AWS Well-Architected Framework, ensuring systems can handle changes in demand and recover from disruptions.",
    multiSelect: true,
  },
  {
    question:
      "37. A cloud engineer wants to know the percentage of allocated compute units that are in use for a specific Amazon EC2 instance. Which AWS service can provide this information?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS Artifact",
    ],
    answer: "C. Amazon CloudWatch",
    explanation:
      "Amazon CloudWatch can provide this information through metrics that detail Amazon EC2 instance utilization, allowing users to view and optimize resource usage.",
    multiSelect: false,
  },
  {
    question:
      "38. Which AWS service or feature is used for troubleshooting network connectivity between Amazon EC2 instances?",
    options: [
      "A. AWS Certificate Manager (ACM)",
      "B. Internet Gateway",
      "C. VPC Flow Logs",
      "D. AWS CloudHSM",
    ],
    answer: "C. VPC Flow Logs",
    explanation:
      "VPC Flow Logs is a feature that allows users to capture information about network traffic to and from their VPCs, aiding in troubleshooting connectivity.",
    multiSelect: false,
  },
  {
    question: "39. Which AWS service provides highly durable object storage?",
    options: [
      "A. Amazon S3",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon FSx",
    ],
    answer: "A. Amazon S3",
    explanation:
      "Amazon S3 provides highly durable object storage, ideal for a wide variety of cloud storage use cases.",
    multiSelect: false,
  },
  {
    question:
      "40. Which AWS service or feature gives users the ability to provision a dedicated private network connection from their internal network to AWS?",
    options: [
      "A. AWS CloudHSM",
      "B. AWS Direct Connect",
      "C. AWS VPN",
      "D. Amazon Connect",
    ],
    answer: "B. AWS Direct Connect",
    explanation:
      "AWS Direct Connect allows users to establish a dedicated private network connection from their internal networks to AWS, providing a more consistent network experience with higher bandwidth.",
    multiSelect: false,
  },
  {
    question:
      "41. A company wants its Amazon EC2 instances to operate in a highly available environment, even in case of a natural disaster in a specific geographic area. Which solution achieves this goal?",
    options: [
      "A. Use EC2 instances in a single Availability Zone",
      "B. Use EC2 instances across multiple AWS Regions",
      "C. Use EC2 instances across multiple edge locations",
      "D. Use Amazon CloudFront with the EC2 instances configured as the origin",
    ],
    answer: "B. Use EC2 instances across multiple AWS Regions",
    explanation:
      "Using EC2 instances across multiple AWS Regions can help ensure high availability of the application, even in the event of natural disasters affecting a specific geographic area.",
    multiSelect: false,
  },
  {
    question:
      "42. What is the recommended method to secure sensitive data in transit on AWS?",
    options: [
      "A. Use AWS Shield",
      "B. Use SSL/TLS",
      "C. Use AWS WAF",
      "D. Use IAM security policies",
    ],
    answer: "B. Use SSL/TLS",
    explanation:
      "The recommended method for securing sensitive data in transit on AWS is using SSL/TLS (Secure Socket Layer/Transport Layer Security), which encrypts data in transit and ensures secure communication.",
    multiSelect: false,
  },
  {
    question:
      "43. What does Amazon RDS automate that benefits database administrators?",
    options: [
      "A. Writing SQL queries",
      "B. Database schema design",
      "C. Backing up and recovering database instances",
      "D. Generating business reports",
    ],
    answer: "C. Backing up and recovering database instances",
    explanation:
      "Amazon RDS automates database administration tasks like backups, patching, and recovery, which benefits database administrators by reducing manual workload.",
    multiSelect: false,
  },
  {
    question:
      "44. Which AWS service is best for distributing traffic among multiple Amazon EC2 instances?",
    options: [
      "A. Amazon EC2 Auto Scaling",
      "B. AWS Direct Connect",
      "C. Amazon Route 53",
      "D. Elastic Load Balancer",
    ],
    answer: "D. Elastic Load Balancer",
    explanation:
      "Elastic Load Balancer (ELB) is the AWS service designed to automatically distribute incoming traffic across multiple Amazon EC2 instances, ensuring high availability and scalability of the application.",
    multiSelect: false,
  },
  {
    question: "45. What is the purpose of AWS CloudFormation?",
    options: [
      "A. Monitor application performance",
      "B. Manage network security",
      "C. Provision and manage AWS resources",
      "D. Automate application deployment",
    ],
    answer: "C. Provision and manage AWS resources",
    explanation:
      "AWS CloudFormation allows users to provision and manage AWS resources, using 'templates' to create and manage a collection of related resources, automating your infrastructure as code.",
    multiSelect: false,
  },
  {
    question: "46. How are costs calculated in Amazon S3?",
    options: [
      "A. Based on the number of GET requests",
      "B. Based on the number of objects stored",
      "C. Based on the total size of stored data and data transfer",
      "D. Based on the duration of data storage",
    ],
    answer: "C. Based on the total size of stored data and data transfer",
    explanation:
      "Costs in Amazon S3 are calculated based on the total size of data stored and data transfer, including object storage, requests, and data transfers.",
    multiSelect: false,
  },
  {
    question:
      "47. Which AWS service helps in detecting security flaws in applications?",
    options: [
      "A. AWS Inspector",
      "B. AWS Shield",
      "C. Amazon GuardDuty",
      "D. AWS WAF",
    ],
    answer: "A. AWS Inspector",
    explanation:
      "AWS Inspector is an automated security assessment service that helps improve the security and compliance of applications by detecting security vulnerabilities and flaws.",
    multiSelect: false,
  },
  {
    question: "48. Which characteristic describes Amazon DynamoDB?",
    options: [
      "A. Relational database",
      "B. Document database",
      "C. NoSQL database",
      "D. Data warehouse",
    ],
    answer: "C. NoSQL database",
    explanation:
      "Amazon DynamoDB is a fast and flexible NoSQL database service, designed for internet-scale applications, providing high performance, scalability, and reliability.",
    multiSelect: false,
  },
  {
    question: "49. What does AWS Lambda allow developers to do?",
    options: [
      "A. Manage EC2 instances",
      "B. Run code in response to triggers",
      "C. Automatically allocate Elastic IPs",
      "D. Monitor applications in real-time",
    ],
    answer: "B. Run code in response to triggers",
    explanation:
      "AWS Lambda allows developers to run code in response to triggers such as data changes or user requests, without provisioning or managing servers.",
    multiSelect: false,
  },
  {
    question: "50. What is the primary purpose of Amazon S3?",
    options: [
      "A. Run serverless functions",
      "B. Scalable object storage",
      "C. Host web applications",
      "D. Large-scale data processing",
    ],
    answer: "B. Scalable object storage",
    explanation:
      "The primary purpose of Amazon S3 is to provide scalable object storage, with data durability and availability for a wide range of use cases.",
    multiSelect: false,
  },
  {
    question: "51. What is AWS Direct Connect?",
    options: [
      "A. A service for connecting on-premises networks to AWS",
      "B. A tool for transferring large files",
      "C. An instant messaging service",
      "D. A database management system",
    ],
    answer: "A. A service for connecting on-premises networks to AWS",
    explanation:
      "AWS Direct Connect is a service that provides a dedicated network connection from your on-premises infrastructure to AWS, reducing network costs, increasing bandwidth, and providing a more consistent network experience.",
    multiSelect: false,
  },
  {
    question:
      "52. Which AWS service should a cloud engineer use to visualize API calls to AWS services?",
    options: [
      "A. Amazon CloudWatch",
      "B. AWS CloudTrail",
      "C. AWS Config",
      "D. AWS Artifact",
    ],
    answer: "B. AWS CloudTrail",
    explanation:
      "AWS CloudTrail is a service that provides a history of AWS API calls for your AWS account, allowing users to audit and review account activity.",
    multiSelect: false,
  },
  {
    question:
      "53. How can an AWS user perform security assessments on Amazon EC2 instances, NAT gateways, and Elastic Load Balancers in an AWS-approved manner?",
    options: [
      "A. Flood a target with requests",
      "B. Use Amazon Inspector",
      "C. Conduct penetration testing",
      "D. Use the AWS Service Health Dashboard",
    ],
    answer: "B. Use Amazon Inspector",
    explanation:
      "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity.",
    multiSelect: false,
  },
  {
    question: "54. Which factors impact costs in the AWS Cloud? (Select TWO.)",
    options: [
      "A. Number of unused AWS Lambda functions",
      "B. Number of Amazon S3 buckets configured",
      "C. Data transfer in without acceleration",
      "D. Data transfer out without acceleration",
      "E. Compute resources that are currently in use",
    ],
    answer: [
      "D. Data transfer out without acceleration",
      "E. Compute resources that are currently in use",
    ],
    explanation:
      "Data transfer out without acceleration and compute resources that are currently in use are factors that impact costs in the AWS Cloud.",
    multiSelect: true,
  },
  {
    question:
      "55. What is a cost efficiency principle related to the AWS cloud?",
    options: [
      "A. Properly size services based on capacity needs",
      "B. Use the Billing Dashboard to access monthly account information",
      "C. Use AWS Organizations to combine the expenses of multiple accounts into a single invoice",
      "D. Tag all AWS resources",
    ],
    answer: "A. Properly size services based on capacity needs",
    explanation:
      "One of the cost efficiency principles related to the AWS cloud is to properly size services based on capacity needs. This means choosing the most appropriate type and size of AWS resources to meet the performance and scalability requirements of applications, avoiding over-provisioning or under-provisioning.",
    multiSelect: false,
  },
  {
    question:
      "56. A company is setting up its AWS cloud environment. The company's administrators need to group users and apply permissions to the group. Which AWS service or feature can the company use to meet these requirements?",
    options: [
      "A. AWS Organizations",
      "B. Resource Groups",
      "C. Resource Tagging",
      "D. AWS Identity and Access Management (IAM)",
    ],
    answer: "D. AWS Identity and Access Management (IAM)",
    explanation:
      "The AWS service or feature that the company can use to group users and apply permissions to the group is AWS Identity and Access Management (IAM). IAM allows creating and managing users and groups and assigning policies that define permissions for the users in the groups.",
    multiSelect: false,
  },
  {
    question:
      "57. A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the centers. How can the company meet this requirement?",
    options: [
      "A. Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection",
      "B. Place the EC2 instances in two separate Availability Zones within the same AWS Region",
      "C. Place one EC2 instance on-premises and the other in an AWS Region. Then connect them using an AWS VPN connection",
      "D. Place both EC2 instances in a placement group for dedicated bandwidth",
    ],
    answer:
      "B. Place the EC2 instances in two separate Availability Zones within the same AWS Region",
    explanation:
      "Placing the EC2 instances in two separate Availability Zones within the same AWS Region is the best way to meet the requirement. Availability Zones are isolated locations within an AWS Region that have independent power, cooling, and physical security, and are connected to each other with high-bandwidth, low-latency networks.",
    multiSelect: false,
  },
  {
    question:
      "58. A security engineer wants a single-tenant AWS solution to create, control, and manage their own cryptographic keys to meet data security regulatory requirements. Which AWS service should the engineer use?",
    options: [
      "A. AWS Key Management Service (AWS KMS)",
      "B. AWS Certificate Manager (ACM)",
      "C. AWS CloudHSM",
      "D. AWS Systems Manager",
    ],
    answer: "C. AWS CloudHSM",
    explanation:
      "The AWS service that the engineer should use is AWS CloudHSM. AWS CloudHSM provides dedicated hardware security modules (HSMs) that enable customers to create, control, and manage their own cryptographic keys in the AWS cloud.",
    multiSelect: false,
  },
  {
    question:
      "59. A company is designing an access and identity management solution for an application. The company wants users to be able to use their social media, email, or online shopping accounts to access the application. Which AWS service provides this functionality?",
    options: [
      "A. AWS IAM Identity Center (AWS Single Sign-On)",
      "B. AWS Config",
      "C. Amazon Cognito",
      "D. AWS Identity and Access Management (IAM)",
    ],
    answer: "C. Amazon Cognito",
    explanation:
      "The correct answer is C because Amazon Cognito provides user identity and authentication for web and mobile apps. Amazon Cognito allows users to sign in with their social media, email, or online shopping accounts.",
    multiSelect: false,
  },
  {
    question:
      "60. What is the benefit of migrating to the AWS cloud in terms of improving time-to-market?",
    options: [
      "A. Reduced deployment speed",
      "B. Increased application security",
      "C. Increased business agility",
      "D. Increased backup capabilities",
    ],
    answer: "C. Increased business agility",
    explanation:
      "Increased business agility is a benefit of migrating to the AWS cloud in terms of improving time-to-market.",
    multiSelect: false,
  },
  {
    question:
      "61. Which benefit is included in the AWS Enterprise Support plan?",
    options: [
      "A. AWS Partner Network (APN) support at no additional cost",
      "B. Designated support from an AWS technical account manager (TAM)",
      "C. On-site support from AWS engineers",
      "D. AWS managed compliance as code with AWS Config",
    ],
    answer: "B. Designated support from an AWS technical account manager (TAM)",
    explanation:
      "The AWS Enterprise Support plan is the highest tier of support that provides customers with a concierge-like service where the primary focus is to help them achieve their outcomes and find success in the cloud.",
    multiSelect: false,
  },
  {
    question:
      "62. A company wants to track the service costs of their AWS account. The company also wants to receive notifications when the forecasted costs reach a specific level. Which AWS service or tool provides this functionality?",
    options: [
      "A. AWS Budgets",
      "B. AWS Cost Explorer",
      "C. Savings Plans",
      "D. AWS Billing Conductor",
    ],
    answer: "A. AWS Budgets",
    explanation:
      "AWS Budgets allows you to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.",
    multiSelect: false,
  },
  {
    question:
      "63. Which pillar of the AWS Well-Architected Framework focuses on the return on investment of migrating to the AWS cloud?",
    options: [
      "A. Sustainability",
      "B. Cost Optimization",
      "C. Operational Excellence",
      "D. Reliability",
    ],
    answer: "B. Cost Optimization",
    explanation:
      "Cost Optimization is the pillar of the AWS Well-Architected Framework that focuses on the return on investment of migrating to the AWS cloud.",
    multiSelect: false,
  },
  {
    question:
      "64. Which pillar of the AWS Well-Architected Framework focuses on the ability to run workloads effectively, gain insight into operations, and continuously improve supporting processes and procedures?",
    options: [
      "A. Cost Optimization",
      "B. Reliability",
      "C. Operational Excellence",
      "D. Performance Efficiency",
    ],
    answer: "C. Operational Excellence",
    explanation:
      "The Operational Excellence pillar of the AWS Well-Architected Framework focuses on the ability to run workloads effectively, gain insight into operations, and continuously improve supporting processes and procedures.",
    multiSelect: false,
  },
  {
    question:
      "65. Which of the following is a characteristic of the AWS account root user?",
    options: [
      "A. The root user is the only user that can be configured with multi-factor authentication (MFA).",
      "B. The root user is the only user that can access the AWS Management Console.",
      "C. The root user is the first login identity available when an AWS account is created.",
      "D. The root user has a password that cannot be changed.",
    ],
    answer:
      "C. The root user is the first login identity available when an AWS account is created.",
    explanation:
      "The AWS account root user is the first login identity available when an AWS account is created. It has complete access to all AWS services and resources in the account.",
    multiSelect: false,
  },
  {
    question:
      "66. What options does AWS make available to customers who want to learn about cloud security in an instructor-led environment? (Select TWO.)",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Online Tech Talks",
      "C. AWS Blog",
      "D. AWS Forums",
      "E. AWS Classroom Training",
    ],
    answer: ["B. AWS Online Tech Talks", "E. AWS Classroom Training"],
    explanation:
      "The correct options are B and E because AWS Online Tech Talks and AWS Classroom Training are options made available by AWS for customers who want to learn about cloud security in an instructor-led environment.",
    multiSelect: true,
  },
  {
    question:
      "67. Which AWS service uses a combination of publishers and subscribers?",
    options: [
      "A. AWS Lambda",
      "B. Amazon Simple Notification Service (Amazon SNS)",
      "C. Amazon CloudWatch",
      "D. AWS CloudFormation",
    ],
    answer: "B. Amazon Simple Notification Service (Amazon SNS)",
    explanation:
      "Amazon Simple Notification Service (Amazon SNS) is a service that offers fully managed pub/sub messaging. Pub/sub messaging is a pattern that uses a combination of publishers and subscribers.",
    multiSelect: false,
  },
  {
    question:
      "68. Which of the following are advantages that a company receives by moving an on-premises production workload to AWS? (Select TWO.)",
    options: [
      "A. AWS trains the company's staff on the use of all AWS services.",
      "B. AWS manages all cloud security.",
      "C. AWS provides free support from technical account managers (TAMs).",
      "D. AWS provides high availability.",
      "E. AWS provides economies of scale.",
    ],
    answer: [
      "D. AWS provides high availability.",
      "E. AWS provides economies of scale.",
    ],
    explanation:
      "The correct answers are D and E because AWS provides high availability and AWS provides economies of scale, which are advantages that a company receives by moving an on-premises production workload to AWS. High availability means that AWS has a global infrastructure that enables customers to deploy their applications and data across multiple regions and Availability Zones. This increases the fault tolerance and resiliency of their applications and reduces the impact of failures. Economies of scale mean that AWS can achieve lower variable costs than customers can on their own. This allows customers to pay only for the resources they use and scale up or down as needed.",
    multiSelect: true,
  },
  {
    question:
      "69. Which of the following represents a cloud concept that this architecture represents by deploying an application across multiple AWS Regions and configuring automatic failover between those Regions?",
    options: [
      "A. Security",
      "B. Reliability",
      "C. Scalability",
      "D. Cost Optimization",
    ],
    answer: "B. Reliability",
    explanation:
      "Reliability is the cloud concept that this architecture represents. Reliability is the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues. Deploying an application across multiple AWS Regions and configuring automatic failover between those Regions increases the reliability of the application by reducing the impact of regional failures and increasing the availability of the application.",
    multiSelect: false,
  },
  {
    question:
      "70. Which of the following is a benefit of decoupling an AWS cloud architecture?",
    options: [
      "A. Reduced latency",
      "B. Ability to update components independently",
      "C. Decreased costs",
      "D. Fewer components to manage",
    ],
    answer: "B. Ability to update components independently",
    explanation:
      "A benefit of decoupling an AWS cloud architecture is the ability to update components independently. Decoupling is a way of designing systems to reduce interdependencies and minimize the impact of changes. Decoupling allows components to interact with each other through well-defined interfaces, instead of direct references. This reduces the risk of failures and errors propagating throughout the system and enables greater scalability, availability, and maintainability. By decoupling an AWS cloud architecture, the user can update or modify one component without affecting the other components.",
    multiSelect: false,
  },
  {
    question:
      "71. A company is launching a new application on the AWS cloud. The application will run on an Amazon EC2 instance. More EC2 instances will be needed when the workload increases. Which AWS service or tool can the company use to launch the number of EC2 instances required to handle the workload?",
    options: [
      "A. Elastic Load Balancing",
      "B. Amazon EC2 Auto Scaling",
      "C. AWS App2Container (A2C)",
      "D. AWS Systems Manager",
    ],
    answer: "B. Amazon EC2 Auto Scaling",
    explanation:
      "Amazon EC2 Auto Scaling is the AWS service or tool that can help the company launch the number of EC2 instances required to handle the workload. Amazon EC2 Auto Scaling automatically adjusts the capacity of EC2 instances based on demand and predefined scaling policies. Amazon EC2 Auto Scaling also helps improve availability and reduce costs by scaling in and out as needed.",
    multiSelect: false,
  },
  {
    question:
      "72. Which of the following AWS services or features allow CIDR block notation when providing an IP address range? (Select TWO.)",
    options: [
      "A. Security groups",
      "B. Amazon Machine Image (AMI)",
      "C. Network access control list (network ACL)",
      "D. AWS Budgets",
      "E. Amazon Elastic Block Store (Amazon EBS)",
    ],
    answer: [
      "A. Security groups",
      "C. Network access control list (network ACL)",
    ],
    explanation:
      "The correct answers are A and C because security groups and network access control lists (network ACLs) are AWS services or features that allow CIDR block notation when providing an IP address range. Security groups act as a virtual firewall for the associated Amazon EC2 instances, controlling inbound and outbound traffic at the instance level. Network ACLs act as a firewall for the associated subnets, controlling inbound and outbound traffic at the subnet level. Both security groups and network ACLs use CIDR block notation to specify the IP address ranges that are allowed or denied.",
    multiSelect: true,
  },
  {
    question:
      "73. Which of the following AWS services provides the capability to host a NoSQL database in the AWS Cloud?",
    options: [
      "A. Amazon Aurora",
      "B. Amazon DynamoDB",
      "C. Amazon RDS",
      "D. Amazon Redshift",
    ],
    answer: "B. Amazon DynamoDB",
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It supports both key-value and document data models, and enables you to create tables that can store and retrieve any amount of data, and serve any level of request traffic. You can also use DynamoDB Streams to capture changes to data items in DynamoDB tables.",
    multiSelect: false,
  },

  {
    question:
      "74. Which AWS service can a user use to identify any security group that is allowing unrestricted inbound SSH traffic?",
    options: [
      "A. Amazon Cognito",
      "B. AWS Shield",
      "C. Amazon Macie",
      "D. AWS Trusted Advisor",
    ],
    answer: "D. AWS Trusted Advisor",
    explanation:
      "The correct answer for the question is D because AWS Trusted Advisor is an AWS service that can be used to perform the task of identifying any security group that is allowing unrestricted inbound SSH traffic. AWS Trusted Advisor inspects the customer's AWS environment and identifies ways to optimize their AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas. One of the checks that Trusted Advisor performs is the Security Groups - Specific Ports Unrestricted check, which flags security groups that allow unrestricted access to specific ports such as port 22 for SSH. Customers can use this check to review and modify the security group rules to restrict SSH access to only authorized sources.",
    multiSelect: false,
  },

  {
    question:
      "75. A company wants to use the AWS Cloud to manage access and permissions for its third-party Software as a Service (SaaS) applications. The company wants to use a portal where end users can access the assigned AWS accounts and applications in the cloud.",
    options: [
      "A. Amazon Cognito",
      "B. AWS IAM Identity Center (AWS Single Sign-On)",
      "C. AWS Identity and Access Management (IAM)",
      "D. AWS Directory Service for Microsoft Active Directory",
    ],
    answer: "B. AWS IAM Identity Center (AWS Single Sign-On)",
    explanation:
      "AWS IAM Identity Center (AWS Single Sign-On) is the AWS service that the company should use to meet the requirements for managing access and permissions for its third-party SaaS applications. AWS Single Sign-On is a cloud-based service that makes it easy to centrally manage single sign-on (SSO) access to multiple AWS accounts and business applications. You can use AWS Single Sign-On to enable your users to sign in to a user portal with their corporate credentials and access all their assigned AWS accounts and applications from one place.",
    multiSelect: false,
  },
  {
    question:
      "76. Which AWS service is a highly available and scalable DNS web service?",
    options: [
      "A. Amazon VPC",
      "B. Amazon CloudFront",
      "C. Amazon Route 53",
      "D. Amazon Connect",
    ],
    answer: "C. Amazon Route 53",
    explanation:
      "Amazon Route 53 is a highly available and scalable DNS web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications by translating names into the numeric IP addresses that computers use to connect to each other. Amazon Route 53 also offers other features like health checks, traffic management, domain name registration, and DNSSEC.",
    multiSelect: false,
  },

  {
    question: "77. What is the total amount of storage offered by Amazon S3?",
    options: ["A. 100MB", "B. 5 GB", "C. 5 TB", "D. Unlimited"],
    answer: "D. Unlimited",
    explanation:
      "Amazon S3 offers unlimited storage for any amount of data. You can store as many objects as you want, and each object can be up to 5 terabytes in size. You only pay for the storage space you actually use, and there are no minimum commitments or upfront fees. Amazon S3 also provides high durability, availability, scalability, and security for your data.",
    multiSelect: false,
  },

  {
    question:
      "78. A large company has a workload that requires hardware to remain on-premises. The company wants to use the same AWS control plane and management services that it currently uses in the cloud.",
    options: [
      "A. AWS Device Farm",
      "B. AWS Fargate",
      "C. AWS Outposts",
      "D. AWS Ground Station",
    ],
    answer: "C. AWS Outposts",
    explanation:
      "The correct answer is C because AWS Outposts is an AWS service that allows the company to meet the requirements. AWS Outposts is a fully managed service that extends AWS infrastructure, services, APIs, and tools to virtually any data center, co-location space, or on-premises facility. AWS Outposts allows customers to run their workloads on the same hardware and software that AWS uses in its cloud, while maintaining local access and control. The other options are incorrect because they are not AWS services that allow the company to meet the requirements. AWS Device Farm is an AWS service that allows customers to test their mobile and web applications on real devices in the AWS cloud. AWS Fargate is an AWS service that allows customers to run containers without having to manage servers or clusters. AWS Ground Station is an AWS service that allows customers to communicate with satellites and download data from orbit.",
    multiSelect: false,
  },

  {
    question:
      "79. What are the responsibilities of a company that is using AWS Lambda? (Select TWO.)",
    options: [
      "A. In-code security",
      "B. CPU resource selection",
      "C. Operating system patching",
      "D. Code writing and updating",
      "E. Underlying infrastructure security",
    ],
    answer: ["A. In-code security", "D. Code writing and updating"],
    explanation:
      "The responsibilities of a company that is using AWS Lambda are in-code security and code writing and updating. AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, scaling or patching. AWS Lambda takes care of the security of the underlying infrastructure, such as the operating system, network, and firewall. However, the company is still responsible for the security of the code itself, such as encrypting sensitive data, validating input, and handling errors. The company is also responsible for writing and updating the code that defines the Lambda function and choosing the runtime environment, such as Node.js, Python, or Java. AWS Lambda does not require CPU resource selection, as it automatically allocates based on the memory configuration.",
    multiSelect: true,
  },

  {
    question:
      "80. Which of the following are customer responsibilities according to the AWS Shared Responsibility Model? (Select TWO.)",
    options: [
      "A. Physical security of AWS facilities",
      "B. Security group configuration",
      "C. Encryption of customer data on AWS",
      "D. AWS Lambda infrastructure management",
      "E. Network bandwidth management of each AWS Region",
    ],
    answer: [
      "B. Security group configuration",
      "C. Encryption of customer data on AWS",
    ],
    explanation:
      "The AWS Shared Responsibility Model outlines how AWS and the customer share responsibility for security and compliance of the AWS environment. AWS is responsible for the security of the cloud, which includes the physical security of AWS facilities, infrastructure, hardware, software, and networking that run AWS services. The customer is responsible for security in the cloud, which includes security group configuration, encryption of customer data on AWS, AWS Lambda infrastructure management, and network bandwidth management of each AWS Region.",
    multiSelect: true,
  },

  {
    question:
      "81. Which AWS service should a cloud professional use to receive real-time guidance for provisioning resources, based on AWS best practices related to security, cost optimization, and service limits?",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Config",
      "C. AWS Security Hub",
      "D. AWS Systems Manager",
    ],
    answer: "A. AWS Trusted Advisor",
    explanation:
      "AWS Trusted Advisor is the AWS service that provides real-time guidance for provisioning resources, based on AWS best practices related to security, cost optimization, and service limits. AWS Trusted Advisor inspects your AWS environment and provides recommendations for improving performance, security, and reliability, reducing costs, and following best practices. AWS Trusted Advisor also alerts you when you are approaching or exceeding your service limits and helps you request limit increases.",
    multiSelect: false,
  },

  {
    question:
      "82. A company is running applications on Amazon EC2 instances in the same AWS account for several different projects. The company wants to track infrastructure costs for each of the projects separately. The company must perform this tracking with the least possible impact on existing infrastructure and at no additional cost.",
    options: [
      "A. Use a different Amazon EC2 instance type for each project.",
      "B. Publish project-specific Amazon CloudWatch custom metrics for each application.",
      "C. Deploy EC2 instances for each project in a separate AWS account.",
      "D. Use cost allocation tags with values specific to each project.",
    ],
    answer: "D. Use cost allocation tags with values specific to each project.",
    explanation:
      "The correct answer is D because cost allocation tags are a way to track infrastructure costs for each of the projects separately. Cost allocation tags are key-value pairs that can be attached to AWS resources, such as EC2 instances, and used to categorize and group them for billing purposes. The other options are incorrect because they do not meet the requirements of the question. Using a different Amazon EC2 instance type for each project does not help track the costs of each project and may impact the performance and compatibility of the applications. Publishing project-specific Amazon CloudWatch custom metrics for each application does not help track the costs of each project and may incur additional costs for using CloudWatch. Deploying EC2 instances for each project in a separate AWS account helps track the costs of each project but impacts the existing infrastructure and incurs additional costs for using multiple accounts.",
    multiSelect: false,
  },

  {
    question:
      "83. Which AWS service or feature captures information about inbound and outbound network traffic from an Amazon EC2 instance?",
    options: [
      "A. VPC Reachability Analyzer",
      "B. Amazon Athena",
      "C. VPC Flow Logs",
      "D. AWS X-Ray",
    ],
    answer: "C. VPC Flow Logs",
    explanation:
      "The correct answer is C because VPC Flow Logs are an AWS service or feature that capture information about inbound and outbound network traffic from an Amazon EC2 instance. VPC Flow Logs are a feature that enables customers to capture information about the IP traffic going to and from network interfaces in their VPCs. VPC Flow Logs can help customers monitor and troubleshoot connectivity issues, such as traffic that is not reaching an instance or traffic that is being rejected by a security group. The other options are incorrect because they are not AWS services or features that capture information about inbound and outbound network traffic from an Amazon EC2 instance. VPC Reachability Analyzer is an AWS service or feature that allows customers to perform connectivity testing between resources in their VPCs and identify configuration issues that prevent connectivity. Amazon Athena is an AWS service that allows customers to query data stored in Amazon S3 using standard SQL. AWS X-Ray is an AWS service that allows customers to analyze and debug distributed applications, such as those built using a microservices architecture.",
    multiSelect: false,
  },
  {
    question:
      "84. Which of the following are customer responsibilities according to the AWS Shared Responsibility Model? (Select TWO.)",
    options: [
      "A. Physical security of AWS facilities",
      "B. Security group configuration",
      "C. Encryption of customer data on AWS",
      "D. AWS Lambda infrastructure management",
      "E. Network bandwidth management of each AWS Region",
    ],
    answer: [
      "B. Security group configuration",
      "C. Encryption of customer data on AWS",
    ],
    explanation:
      "The AWS Shared Responsibility Model outlines how AWS and the customer share responsibility for security and compliance of the AWS environment. AWS is responsible for the security of the cloud, which includes the physical security of AWS facilities, infrastructure, hardware, software, and networking that run AWS services. The customer is responsible for security in the cloud, which includes security group configuration, encryption of customer data on AWS, AWS Lambda infrastructure management, and network bandwidth management of each AWS Region.",
    multiSelect: true,
  },

  {
    question:
      "85. Which AWS service should a cloud professional use to receive real-time guidance for provisioning resources, based on AWS best practices related to security, cost optimization, and service limits?",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Config",
      "C. AWS Security Hub",
      "D. AWS Systems Manager",
    ],
    answer: "A. AWS Trusted Advisor",
    explanation:
      "AWS Trusted Advisor is the AWS service that provides real-time guidance for provisioning resources, based on AWS best practices related to security, cost optimization, and service limits. AWS Trusted Advisor inspects your AWS environment and provides recommendations for improving performance, security, and reliability, reducing costs, and following best practices. AWS Trusted Advisor also alerts you when you are approaching or exceeding your service limits and helps you request limit increases.",
    multiSelect: false,
  },

  {
    question:
      "86. A company is running applications on Amazon EC2 instances in the same AWS account for several different projects. The company wants to track infrastructure costs for each of the projects separately. The company must perform this tracking with the least possible impact on existing infrastructure and at no additional cost.",
    options: [
      "A. Use a different Amazon EC2 instance type for each project.",
      "B. Publish project-specific Amazon CloudWatch custom metrics for each application.",
      "C. Deploy EC2 instances for each project in a separate AWS account.",
      "D. Use cost allocation tags with values specific to each project.",
    ],
    answer: "D. Use cost allocation tags with values specific to each project.",
    explanation:
      "The correct answer is D because cost allocation tags are a way to track infrastructure costs for each of the projects separately. Cost allocation tags are key-value pairs that can be attached to AWS resources, such as EC2 instances, and used to categorize and group them for billing purposes. The other options are incorrect because they do not meet the requirements of the question. Using a different Amazon EC2 instance type for each project does not help track the costs of each project and may impact the performance and compatibility of the applications. Publishing project-specific Amazon CloudWatch custom metrics for each application does not help track the costs of each project and may incur additional costs for using CloudWatch. Deploying EC2 instances for each project in a separate AWS account helps track the costs of each project but impacts the existing infrastructure and incurs additional costs for using multiple accounts.",
    multiSelect: false,
  },

  {
    question:
      "87. Which AWS service or feature captures information about inbound and outbound network traffic from an Amazon EC2 instance?",
    options: [
      "A. VPC Reachability Analyzer",
      "B. Amazon Athena",
      "C. VPC Flow Logs",
      "D. AWS X-Ray",
    ],
    answer: "C. VPC Flow Logs",
    explanation:
      "The correct answer is C because VPC Flow Logs are an AWS service or feature that capture information about inbound and outbound network traffic from an Amazon EC2 instance. VPC Flow Logs are a feature that enables customers to capture information about the IP traffic going to and from network interfaces in their VPCs. VPC Flow Logs can help customers monitor and troubleshoot connectivity issues, such as traffic that is not reaching an instance or traffic that is being rejected by a security group. The other options are incorrect because they are not AWS services or features that capture information about inbound and outbound network traffic from an Amazon EC2 instance. VPC Reachability Analyzer is an AWS service or feature that allows customers to perform connectivity testing between resources in their VPCs and identify configuration issues that prevent connectivity. Amazon Athena is an AWS service that allows customers to query data stored in Amazon S3 using standard SQL. AWS X-Ray is an AWS service that allows customers to analyze and debug distributed applications, such as those built using a microservices architecture.",
    multiSelect: false,
  },

  {
    question:
      "88. A company is migrating an application that includes an Oracle database to AWS. The company cannot rewrite the application.",
    options: [
      "A. Amazon Athena",
      "B. Amazon DynamoDB",
      "C. Amazon RDS",
      "D. Amazon DocumentDB (with MongoDB compatibility)",
    ],
    answer: "C. Amazon RDS",
    explanation:
      "Amazon Relational Database Service (Amazon RDS) is a service that provides managed relational database engines. Amazon RDS supports multiple database engines, including Oracle, MySQL, PostgreSQL, MariaDB, SQL Server, and Amazon Aurora. Amazon RDS can be used to migrate an application that includes an Oracle database to AWS without rewriting the application, as long as the application is compatible with the version and edition of Oracle supported by Amazon RDS. Amazon RDS can also provide benefits such as high availability, scalability, security, backup and restore, and performance optimization.",
    multiSelect: false,
  },

  {
    question:
      "89. Which AWS feature or resource is a deployable Amazon EC2 instance template that is pre-packaged with software and security requirements?",
    options: [
      "A. Amazon Elastic Block Store (Amazon EBS) volume",
      "B. AWS CloudFormation template",
      "C. Amazon Elastic Block Store (Amazon EBS) snapshot",
      "D. Amazon Machine Image (AMI)",
    ],
    answer: "D. Amazon Machine Image (AMI)",
    explanation:
      "An Amazon Machine Image (AMI) is a deployable Amazon EC2 instance template that is pre-packaged with software and security requirements. It provides the information required to launch an instance, which is a virtual server in the cloud. You can use an AMI to launch as many instances as you need. You can also create your own custom AMIs or use shared AMIs from other AWS users.",
    multiSelect: false,
  },

  {
    question:
      "90. Which AWS service or tool can be used to consolidate a company's payments with multiple AWS accounts?",
    options: [
      "A. AWS Cost and Usage Report",
      "B. AWS Organizations",
      "C. Cost Explorer",
      "D. AWS Budgets",
    ],
    answer: "B. AWS Organizations",
    explanation:
      "AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. AWS Organizations includes consolidated billing and account management features that allow you to better meet the budgetary, security, and compliance needs of your business.",
    multiSelect: false,
  },

  {
    question:
      "91. Which AWS services and features are provided to all customers at no additional cost? (Select TWO.)",
    options: [
      "A. Amazon Aurora",
      "B. VPC",
      "C. Amazon SageMaker",
      "D. AWS Identity and Access Management (IAM)",
      "E. Amazon Polly",
    ],
    answer: ["B. VPC", "D. AWS Identity and Access Management (IAM)"],
    explanation:
      "The AWS services and features that are provided to all customers at no additional cost are VPC and AWS Identity and Access Management (IAM). VPC is a service that enables you to launch AWS resources in a logically isolated virtual network that you define. You can create and use a VPC at no additional cost and only pay for the resources you launch inside the VPC, such as EC2 instances or EBS volumes. IAM is a service that enables you to manage access and permissions to AWS resources. You can create and use IAM users, groups, roles, and policies at no additional cost and only pay for the AWS resources that IAM entities access. Amazon Aurora, Amazon SageMaker, and Amazon Polly are not free services and charge based on usage and chosen resources.",
    multiSelect: true,
  },

  {
    question: "92. Which of the following describes an AWS Region?",
    options: [
      "A. A specific location within a geographical area that provides high availability",
      "B. A collection of data centers that span multiple countries",
      "C. A global view of a user's cloud computing environment",
      "D. A collection of databases that can be accessed only from a specific geographical area",
    ],
    answer:
      "A. A specific location within a geographical area that provides high availability",
    explanation:
      "An AWS Region is a specific location within a geographical area that provides high availability. An AWS Region consists of two or more Availability Zones, which are isolated locations within the same Region. Each Availability Zone has independent power, cooling, and physical security, and is connected to the other Availability Zones in the same Region via a low-latency, high-throughput, and highly redundant network. AWS services are available in multiple Regions worldwide, enabling the user to choose where to run their applications and store their data.",
    multiSelect: false,
  },

  {
    question:
      "93. Which pillar of the AWS Well-Architected Framework includes a design principle about measuring the overall efficiency of workloads in terms of business value?",
    options: [
      "A. Operational Excellence",
      "B. Security",
      "C. Reliability",
      "D. Cost Optimization",
    ],
    answer: "A. Operational Excellence",
    explanation:
      "The Operational Excellence pillar of the AWS Well-Architected Framework includes a design principle about measuring the overall efficiency of workloads in terms of business value. This principle states that you should monitor and measure key performance indicators (KPIs) and set goals and limits that align with your business objectives. You should also use feedback loops to continuously improve your processes and procedures.",
    multiSelect: false,
  },

  {
    question:
      "94. A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data to comma-separated value (.csv) files. A developer wants to write a simple query that can read all those files and generate a summary report.",
    options: [
      "A. Amazon S3 Select",
      "B. Amazon Athena",
      "C. Amazon Redshift",
      "D. Amazon EC2",
    ],
    answer: "B. Amazon Athena",
    explanation:
      "Amazon Athena is the AWS service that the developer should use to write a simple query that can read all the .csv files stored in an Amazon S3 bucket and generate a summary report. Amazon Athena is an interactive query service that enables users to analyze data in Amazon S3 using standard SQL. Amazon Athena requires no setup or management of servers, and users only pay for the queries they run. Amazon Athena can handle multiple data formats, including .csv, and can integrate with other AWS services, such as Amazon QuickSight, for data visualization.",
    multiSelect: false,
  },

  {
    question:
      "95. When designing AWS workloads to be operational even when there are component failures, what is an AWS recommended practice?",
    options: [
      "A. Perform quarterly disaster recovery tests.",
      "B. Place the core component in the us-east-1 Region.",
      "C. Design for automatic failover to healthy resources.",
      "D. Design workloads to fit on a single Amazon EC2 instance.",
    ],
    answer: "C. Design for automatic failover to healthy resources.",
    explanation:
      "Designing for automatic failover to healthy resources is an AWS recommended practice when designing AWS workloads to be operational even when there are component failures. This means that you should architect your system to handle the loss of one or more components without affecting the availability or performance of your application. You can use multiple AWS services and features to achieve this, such as Auto Scaling, Elastic Load Balancing, Amazon Route 53, AWS CloudFormation, and AWS CloudWatch.",
    multiSelect: false,
  },

  {
    question:
      "96. A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks.",
    options: [
      "A. Reliability",
      "B. Security",
      "C. Operational Excellence",
      "D. Performance Efficiency",
    ],
    answer: "B. Security",
    explanation:
      "The pillar of the AWS Well-Architected Framework that is supported by the goals of protecting AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks is security. Security is the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies. The security pillar covers topics such as identity and access management, data protection, infrastructure protection, detection controls, incident response, and compliance.",
    multiSelect: false,
  },
  {
    question:
      "97. A company has an application that uses AWS services. During scaling events, the company wants to keep the application's usage within AWS service quotas.",
    options: [
      "A. Service Quotas console",
      "B. AWS Trusted Advisor",
      "C. AWS Systems Manager",
      "D. AWS Shield",
      "E. AWS Cost Explorer",
    ],
    answer: ["A. Service Quotas console", "B. AWS Trusted Advisor"],
    explanation:
      "The correct answers are A and B because the Service Quotas console and AWS Trusted Advisor are AWS services or tools that can report the quotas so the company can improve the reliability of the application. The Service Quotas console is an AWS tool that allows users to view and manage their quotas for AWS services from a central location. Users can use the Service Quotas console to request quota increases, track quota usage, and set alarms for nearing quota limits. AWS Trusted Advisor is an AWS service that provides real-time guidance to help users follow AWS best practices for security, performance, cost optimization, and fault tolerance. One of the categories of checks that AWS Trusted Advisor performs are the service limits checks, which monitor the usage of each AWS service and alert users when they are close to reaching the default limit. The other options are incorrect because they are not AWS services or tools that can report the quotas so the company can improve the reliability of the application. AWS Systems Manager is an AWS service that enables users to automate operational tasks, manage configuration and compliance, and monitor system health and performance. AWS Shield is an AWS service that protects users against Distributed Denial of Service (DDoS) attacks. AWS Cost Explorer is an AWS tool that allows users to visualize, understand, and manage their AWS costs and usage.",
    multiSelect: true,
  },

  {
    question:
      "98. Which AWS service is a key-value database that delivers single-digit millisecond latency at any scale?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon Aurora",
      "C. Amazon DocumentDB (with MongoDB compatibility)",
      "D. Amazon Neptune",
    ],
    answer: "A. Amazon DynamoDB",
    explanation:
      "The correct answer is A because Amazon DynamoDB is a key-value database that delivers single-digit millisecond latency at any scale. Amazon DynamoDB is a fully managed, serverless, and scalable NoSQL database service that supports both key-value and document data models. The other options are incorrect because they are not key-value databases. Amazon Aurora is a relational database that is compatible with MySQL and PostgreSQL. Amazon DocumentDB (with MongoDB compatibility) is a document database that is compatible with MongoDB. Amazon Neptune is a graph database that supports property graph and RDF graph models.",
    multiSelect: false,
  },

  {
    question:
      "99. Which AWS Cloud feature enables users to have the ability to pay based on current needs, rather than projected needs?",
    options: [
      "A. AWS Budgets",
      "B. Pay-as-you-go pricing",
      "C. Volume discounts",
      "D. Savings Plans",
    ],
    answer: "B. Pay-as-you-go pricing",
    explanation:
      "Pay-as-you-go pricing is the AWS Cloud feature that enables users to have the ability to pay based on current needs, rather than projected needs. Pay-as-you-go means that users only pay for the AWS services and resources they use, without any upfront commitments or long-term contracts. This allows users to scale up or down based on their changing business requirements and avoid paying for idle or unused capacity. Pay-as-you-go also allows users to benefit from AWS's economies of scale and lower costs as they grow their businesses.",
    multiSelect: false,
  },

  {
    question:
      "100. Which AWS service or tool helps centrally manage billing and enable controlled access to resources across AWS accounts?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Organizations",
      "C. AWS Cost Explorer",
      "D. AWS Budgets",
    ],
    answer: "B. AWS Organizations",
    explanation:
      "AWS Organizations helps centrally manage billing and enable controlled access to resources across AWS accounts. AWS Organizations is a service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. AWS Organizations allows you to create groups of accounts and apply policies to them, such as service control policies (SCPs) that specify the services and actions that users and roles can access across accounts. AWS Organizations also allows you to use consolidated billing, which combines the usage and charges across all accounts in your organization into a single bill.",
    multiSelect: false,
  },

  {
    question:
      "101. Which of the following are components of an AWS Site-to-Site VPN connection? (Select TWO.)",
    options: [
      "A. AWS Storage Gateway",
      "B. Virtual private gateway",
      "C. NAT gateway",
      "D. Customer gateway",
      "E. Internet Gateway",
    ],
    answer: ["B. Virtual private gateway", "D. Customer gateway"],
    explanation:
      "The correct answers are B and D because a virtual private gateway and a customer gateway are components of an AWS Site-to-Site VPN connection. A virtual private gateway is the AWS side of the VPN connection that connects to the customer's VPC. A customer gateway is the customer side of the VPN connection that resides on the customer's network. The other options are incorrect because they are not components of an AWS Site-to-Site VPN connection. AWS Storage Gateway is a service that connects on-premises software applications with cloud-based storage. NAT gateway is a service that allows instances in a private subnet to connect to the Internet or other AWS services, but prevents the Internet from initiating a connection with those instances. Internet Gateway is a service that allows communication between instances in a VPC and the Internet.",
    multiSelect: true,
  },
  {
    question:
      "102. Which task is a customer responsibility according to the AWS Shared Responsibility Model?",
    options: [
      "A. Managing guest operating systems",
      "B. Maintaining infrastructure devices configuration",
      "C. Managing host operating systems and virtualization",
      "D. Maintaining software that powers Availability Zones",
    ],
    answer: "A. Managing guest operating systems",
    explanation:
      "Managing guest operating systems is a customer responsibility, according to the AWS Shared Responsibility Model. The AWS Shared Responsibility Model defines the different security and compliance responsibilities of AWS and the customer. AWS is responsible for the security of the cloud, which includes the physical infrastructure, hardware, software, and facilities that run the AWS Cloud. The customer is responsible for security in the cloud, which includes configuring and managing guest operating systems, applications, data, and network traffic protection.",
    multiSelect: false,
  },

  {
    question:
      "103. A company needs to migrate all its development teams to a cloud-based integrated development environment (IDE).",
    options: [
      "A. AWS CodeBuild",
      "B. AWS Cloud9",
      "C. AWS OpsWorks",
      "D. AWS Cloud Development Kit (AWS CDK)",
    ],
    answer: "B. AWS Cloud9",
    explanation:
      "The correct answer is B because AWS Cloud9 is an AWS service that enables users to run their existing custom and non-production workloads on the AWS Cloud quickly and cost-effectively. AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets users write, run, and debug code from a web browser. AWS Cloud9 supports multiple programming languages, such as Python, Java, Node.js, and more. AWS Cloud9 also provides users with a terminal that can access AWS services and resources, such as Amazon EC2 instances, AWS Lambda functions, and AWS CloudFormation stacks. The other options are incorrect because they are not AWS services that enable users to run their existing custom and non-production workloads on the AWS Cloud quickly and cost-effectively. AWS CodeBuild is an AWS service that enables users to compile, test, and package their code for deployment. AWS OpsWorks is an AWS service that enables users to configure and manage their applications using Chef or Puppet. AWS Cloud Development Kit (AWS CDK) is an AWS service that enables users to define and provision their cloud infrastructure using familiar programming languages, such as TypeScript, Python, Java, and C#.",
    multiSelect: false,
  },

  {
    question:
      "104. Which of the following is a recommended design principle of the AWS Well-Architected Framework?",
    options: [
      "A. Reduce downtime by making changes to infrastructure infrequently and in large increments.",
      "B. Spend time to configure infrastructure manually.",
      "C. Learn to improve from operational failures.",
      "D. Use monolithic application design for centralization.",
    ],
    answer: "C. Learn to improve from operational failures.",
    explanation:
      "The correct answer is C because learning to improve from operational failures is a recommended design principle of the AWS Well-Architected Framework. The AWS Well-Architected Framework is a set of best practices and guidelines for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud. The AWS Well-Architected Framework consists of five pillars: operational excellence, security, reliability, performance efficiency, and cost optimization. Each pillar has a set of design principles that describe the characteristics of a well-architected system. Learning to improve from operational failures is a design principle of the operational excellence pillar, which focuses on running and monitoring systems to deliver business value and continually improving processes and procedures. The other options are incorrect because they are not recommended design principles of the AWS Well-Architected Framework. Reducing downtime by making changes to infrastructure infrequently and in large increments is not a design principle of the AWS Well-Architected Framework, but rather a source of risk and inefficiency. A well-architected system should implement changes frequently and in small increments to minimize the impact and scope of failures. Spending time to configure infrastructure manually is not a design principle of the AWS Well-Architected Framework, but rather a source of human error and inconsistency. A well-architected system should automate manual tasks to improve the speed and accuracy of operations. Using monolithic application design for centralization is not a design principle of the AWS Well-Architected Framework, but rather a source of complexity and rigidity. A well-architected system should use loosely coupled and distributed components to enable scalability and resilience.",
    multiSelect: false,
  },

  {
    question: "105. Which AWS database service provides in-memory data store?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon ElastiCache",
      "C. Amazon RDS",
      "D. Amazon Timestream",
    ],
    answer: "B. Amazon ElastiCache",
    explanation:
      "The correct answer is B because Amazon ElastiCache is a service that provides in-memory data store.",
    multiSelect: false,
  },
  {
    question:
      "106. Which AWS service should be used to store database credentials with the highest security?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Secrets Manager",
      "C. Amazon S3",
      "D. AWS Key Management Service (AWS KMS)",
    ],
    answer: "B. AWS Secrets Manager",
    explanation:
      "AWS Secrets Manager should be used to store database credentials with the highest security. It securely stores, encrypts, rotates, and retrieves secrets such as credentials, passwords, and API keys.",
    multiSelect: false,
  },
  {
    question:
      "147. A company has an online shopping website and wants to store customer credit card data. The company must comply with Payment Card Industry (PCI) standards.",
    options: [
      "A. Amazon Cloud Directory",
      "B. AWS Artifact",
      "C. AWS Trusted Advisor",
      "D. Amazon Inspector",
    ],
    answer: "B. AWS Artifact",
    explanation:
      "AWS Artifact provides on-demand access to AWS security and compliance documentation, such as audit reports, security certifications, and agreements, allowing customers to download, review, and accept the relevant documents for their use of AWS services.",
    multiSelect: false,
  },

  {
    question:
      "108. A company wants to centrally manage security policies and billing services in a multi-account AWS environment. Which AWS service should the company use to meet these requirements?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Organizations",
      "C. AWS Resource Access Manager (AWS RAM)",
      "D. AWS Config",
    ],
    answer: "B. AWS Organizations",
    explanation:
      "AWS Organizations helps you centrally govern your environment as you grow and scale your AWS resources. You can create groups of accounts and apply policies to them, as well as consolidate billing from multiple accounts.",
    multiSelect: false,
  },

  {
    question:
      "109. A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
    options: [
      "A. Scaling the web application and services developed with Docker",
      "B. Provisioning or scheduling containers to run on clusters and maintaining their availability",
      "C. Performing hardware maintenance in AWS facilities that run the AWS Cloud",
      "D. Managing the guest operating system, including updates and security patches",
    ],
    answer:
      "C. Performing hardware maintenance in AWS facilities that run the AWS Cloud",
    explanation:
      "It is part of the shared responsibility model, where AWS is responsible for the security of the cloud and the customer is responsible for security in the cloud. AWS is also responsible for the global infrastructure that runs all the services offered in the AWS Cloud.",
    multiSelect: false,
  },

  {
    question:
      "110. When a user wants to use their own per-socket, per-core, or per-VM software licenses for a Microsoft Windows Server running on AWS, which Amazon EC2 instance type is required?",
    options: [
      "A. Spot Instances",
      "B. Dedicated Instances",
      "C. Dedicated Hosts",
      "D. Reserved Instances",
    ],
    answer: "C. Dedicated Hosts",
    explanation:
      "Dedicated Hosts are Amazon EC2 instances required when a user wants to use their own per-socket, per-core, or per-VM software licenses for a Microsoft Windows Server running on AWS. They are physical servers dedicated to a single customer and allow customers to use their existing server-bound software licenses.",
    multiSelect: false,
  },

  {
    question:
      "111. Which AWS service or feature provides protection against HTTP attacks for users running public-facing web applications?",
    options: [
      "A. Security Groups",
      "B. Network ACLs",
      "C. AWS Shield Standard",
      "D. AWS WAF",
    ],
    answer: "D. AWS WAF",
    explanation:
      "AWS WAF is a web application firewall that helps users protect their web applications from common exploits, such as SQL injection, cross-site scripting, and bot attacks. Users can create custom rules to define the web traffic they want to allow, block, or count.",
    multiSelect: false,
  },

  {
    question:
      "112. A company wants to deploy and manage a Docker-based application on AWS.",
    options: [
      "A. An open-source Docker orchestrator on Amazon EC2 instances",
      "B. AWS AppSync",
      "C. Amazon Elastic Container Registry (Amazon ECR)",
      "D. Amazon Elastic Container Service (Amazon ECS)",
    ],
    answer: "D. Amazon Elastic Container Service (Amazon ECS)",
    explanation:
      "Amazon ECS is a fully managed container orchestration service that makes it easy to run, scale, and secure Docker container applications on AWS. It eliminates the need to install, operate, and scale your own cluster management infrastructure.",
    multiSelect: false,
  },

  {
    question:
      "113. A cloud engineer needs to download AWS security and compliance documents for a future audit.",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Artifact",
      "C. AWS Well-Architected Tool",
      "D. AWS Systems Manager",
    ],
    answer: "B. AWS Artifact",
    explanation:
      "AWS Artifact is a self-service portal that allows users to access and download AWS compliance reports and agreements. These documents provide evidence of AWS compliance with global, regional, and industry-specific security standards and regulations.",
    multiSelect: false,
  },

  {
    question:
      "114. A company's application stores data in an Amazon S3 bucket. The company has an AWS Lambda function that processes data in the S3 bucket. The company needs to invoke the function once per day at a specific time.",
    options: [
      "A. AWS Managed Services (AMS)",
      "B. AWS CodeStar",
      "C. Amazon EventBridge",
      "D. AWS Step Functions",
    ],
    answer: "C. Amazon EventBridge",
    explanation:
      "Amazon EventBridge allows you to create scheduled rules that trigger your targets at a specific time or interval, such as once per day. AMS provides operational management, AWS CodeStar manages software development projects, and AWS Step Functions coordinates serverless workflows.",
    multiSelect: false,
  },

  {
    question:
      "115. A company wants to establish a security layer in their VPC that will act as a firewall to control subnet traffic.",
    options: [
      "A. Routing tables",
      "B. Network access control lists (network ACLs)",
      "C. Security groups",
      "D. Amazon GuardDuty",
    ],
    answer: "C. Security groups",
    explanation:
      "Security groups are stateful firewalls that control inbound and outbound traffic at the instance level. You can associate them with each instance in a VPC and specify rules to allow or deny traffic. Routing tables direct traffic, network ACLs are stateless firewalls at the subnet level, and Amazon GuardDuty is a threat detection service.",
    multiSelect: false,
  },

  {
    question:
      "116. A company is migrating an on-premises relational database server to the AWS cloud and wants to minimize the administrative overhead of database maintenance tasks.",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon EC2",
      "C. Amazon Redshift",
      "D. Amazon RDS",
    ],
    answer: "D. Amazon RDS",
    explanation:
      "Amazon RDS is a fully managed relational database service that handles routine database tasks such as provisioning, patching, backup, recovery, failure detection, and repair. It supports multiple database engines, including MySQL, PostgreSQL, Oracle, SQL Server, and Amazon Aurora.",
    multiSelect: false,
  },

  {
    question:
      "117. A cloud professional is analyzing the performance and usage of Amazon EC2 instances to deliver recommendations for potential cost savings.",
    options: [
      "A. Auto Scaling",
      "B. Right Sizing",
      "C. Load Balancing",
      "D. High Availability",
    ],
    answer: "B. Right Sizing",
    explanation:
      "Right Sizing is the process of optimizing the performance and cost of your AWS resources by selecting the most appropriate instance type, size, and configuration based on the workload requirements and usage patterns. This can help reduce the over-provisioning or under-utilization of resources.",
    multiSelect: false,
  },

  {
    question:
      "118. A company recently migrated to the AWS cloud and needs to determine if its newly imported Amazon EC2 instances are properly sized and typed.",
    options: [
      "A. AWS Auto Scaling",
      "B. AWS Control Tower",
      "C. AWS Trusted Advisor",
      "D. AWS Compute Optimizer",
      "E. Amazon Forecast",
    ],
    answer: ["C. AWS Trusted Advisor", "D. AWS Compute Optimizer"],
    explanation:
      "AWS Trusted Advisor provides best practice recommendations and can help identify underutilized or idle EC2 instances, suggesting ways to reduce costs and improve performance. AWS Compute Optimizer analyzes the configuration and utilization metrics of EC2 instances and delivers recommendations for optimal instance types, sizes, and configurations.",
    multiSelect: true,
  },

  {
    question:
      "119. Which AWS support plan assigns an AWS concierge agent to a company's account?",
    options: [
      "A. AWS Basic Support",
      "B. AWS Developer Support",
      "C. AWS Business Support",
      "D. AWS Enterprise Support",
    ],
    answer: "D. AWS Enterprise Support",
    explanation:
      "AWS Enterprise Support is the highest tier of support offered by AWS and provides the most comprehensive and personalized assistance. An AWS concierge agent is a dedicated technical account manager who acts as a single point of contact for the company, helping optimize the AWS environment, resolve issues, and access AWS experts.",
    multiSelect: false,
  },

  {
    question:
      "120. What is an advantage of AWS cloud computing that minimizes variable costs?",
    options: [
      "A. High Availability",
      "B. Economies of Scale",
      "C. Global Reach",
      "D. Agility",
    ],
    answer: "B. Economies of Scale",
    explanation:
      "AWS can achieve lower variable costs per unit of compute by distributing the fixed costs of building and maintaining data centers across a large number of customers. As a result, AWS can offer lower and more predictable prices to its customers, who only pay for the resources they consume.",
    multiSelect: false,
  },

  {
    question:
      "121. Which of the following is an AWS value proposition that describes a user's ability to scale infrastructure based on demand?",
    options: [
      "A. Speed of Innovation",
      "B. Elasticity of Resources",
      "C. Decoupled Architecture",
      "D. Global Deployment",
    ],
    answer: "B. Elasticity of Resources",
    explanation:
      "Elasticity of resources means that the user can quickly and easily provision or deprovision resources, without any upfront commitment or long-term contract. This can help optimize the cost and performance of the application and respond to changing business needs and customer expectations.",
    multiSelect: false,
  },

  {
    question:
      "122. Which of the following is available to a company that has an AWS Business Support plan?",
    options: [
      "A. AWS concierge support",
      "B. AWS DDoS Response Team (DRT)",
      "C. AWS Technical Account Manager (TAM)",
      "D. AWS Health API",
    ],
    answer: "D. AWS Health API",
    explanation:
      "The AWS Health API provides programmatic access to AWS Health information that is presented in the AWS Personal Health Dashboard. It can help users get timely and personalized information about events that can affect the availability and performance of their AWS resources.",
    multiSelect: false,
  },

  {
    question:
      "123. A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops.",
    options: [
      "A. Amazon AppStream 2.0",
      "B. AWS AppSync",
      "C. Amazon WorkLink",
      "D. AWS Elastic Beanstalk",
    ],
    answer: "A. Amazon AppStream 2.0",
    explanation:
      "Amazon AppStream 2.0 is a fully managed, secure application streaming service that allows customers to stream desktop applications from AWS to any device with a web browser. It handles provisioning, scaling, patching, and maintenance of the backend infrastructure, delivering high performance and responsive user experience.",
    multiSelect: false,
  },
  {
    question: "124. What is an Availability Zone?",
    options: [
      "A. A location where users can deploy selected AWS services where there is currently no AWS Region",
      "B. One or more discrete data centers with redundant power, networking, and connectivity",
      "C. One or more server clusters onto which new workloads can be deployed",
      "D. A fast content delivery network (CDN) that securely delivers data, videos, applications, and APIs to users globally",
    ],
    answer:
      "B. One or more discrete data centers with redundant power, networking, and connectivity",
    explanation:
      "Availability Zones are physically separate locations within an AWS Region that are engineered to be isolated from failures and connected by low-latency, high-throughput, and highly redundant networking. Each Availability Zone contains one or more data centers that house the servers and storage devices that run AWS services.",
    multiSelect: false,
  },

  {
    question:
      "125. Which of the following are design principles for reliability in the AWS cloud? (Select TWO)",
    options: [
      "A. Build architectures with tightly coupled resources.",
      "B. Use AWS Trusted Advisor to meet security best practices.",
      "C. Use automation to recover from failure immediately.",
      "D. Properly size Amazon EC2 instances to ensure optimal performance.",
      "E. Simulate failures to test recovery processes.",
    ],
    answer: [
      "C. Use automation to recover from failure immediately.",
      "E. Simulate failures to test recovery processes.",
    ],
    explanation:
      "By using automation, systems can detect and remediate failures without human intervention, reducing the impact and duration of failures and improving system availability. Regularly testing recovery procedures using simulated scenarios can help identify gaps and improve the recovery process.",
    multiSelect: true,
  },
  {
    question:
      "126. Who is responsible for decommissioning underlying storage devices that reach the end of their useful life used to host data on AWS?",
    options: [
      "A. Customer",
      "B. AWS",
      "C. Account creator",
      "D. Auditing team",
    ],
    answer: "B. AWS",
    explanation:
      "AWS is responsible for decommissioning underlying storage devices that reach the end of their useful life, using methods detailed in DoD 5220.22-M or NIST 800-88.",
    multiSelect: false,
  },
  {
    question:
      "127. Which AWS service requires the customer to update the guest operating system?",
    options: [
      "A. AWS Lambda",
      "B. Amazon OpenSearch Service",
      "C. Amazon EC2",
      "D. Amazon ElastiCache",
    ],
    answer: "C. Amazon EC2",
    explanation:
      "Customers are responsible for updating and patching the guest operating system on Amazon EC2 instances.",
    multiSelect: false,
  },
  {
    question:
      "128. Which perspective includes foundational capabilities of the AWS Cloud Adoption Framework?",
    options: [
      "A. Sustainability",
      "B. Operations",
      "C. Performance Efficiency",
      "D. Reliability",
    ],
    answer: "B. Operations",
    explanation:
      "Operations is a foundational capability in the AWS Cloud Adoption Framework, focusing on support and maintenance processes.",
    multiSelect: false,
  },
  {
    question:
      "129. Which AWS cloud design principle is followed when using AWS CloudTrail?",
    options: [
      "A. Automatically recover",
      "B. Perform operations as code",
      "C. Measure efficiency",
      "D. Ensure traceability",
    ],
    answer: "D. Ensure traceability",
    explanation:
      "Using AWS CloudTrail aligns with the design principle of ensuring traceability by logging API calls and events.",
    multiSelect: false,
  },
  {
    question:
      "130. Which AWS service offers a global CDN for secure delivery of content with high speed and low latency?",
    options: [
      "A. Amazon EC2",
      "B. Amazon CloudFront",
      "C. Amazon CloudWatch",
      "D. AWS CloudFormation",
    ],
    answer: "B. Amazon CloudFront",
    explanation:
      "Amazon CloudFront is a global CDN service for secure and fast delivery of content.",
    multiSelect: false,
  },
  {
    question:
      "131. For a stable one-year production workload, which AWS instance purchase option is the most cost-effective?",
    options: [
      "A. Dedicated Hosts",
      "B. Reserved Instances",
      "C. On-Demand Instances",
      "D. Spot Instances",
    ],
    answer: "B. Reserved Instances",
    explanation:
      "Reserved Instances offer significant discounts and are suitable for stable, long-term workloads.",
    multiSelect: false,
  },
  {
    question:
      "132. To access a report on the environmental impact of AWS usage, which service or feature should a company use?",
    options: [
      "A. AWS Organizations",
      "B. IAM Policy",
      "C. AWS Billing Console",
      "D. Amazon SNS",
    ],
    answer: "C. AWS Billing Console",
    explanation:
      "The AWS Billing Console provides reports on the estimated environmental impact of AWS usage.",
    multiSelect: false,
  },
  {
    question:
      "133. Which options are perspectives that include foundational capabilities of the AWS Cloud Adoption Framework? (Select TWO.)",
    options: [
      "A. Sustainability",
      "B. Security",
      "C. Operations",
      "D. Performance Efficiency",
      "E. Reliability",
    ],
    answer: ["C. Operations", "D. Performance Efficiency"],
    explanation:
      "Operations and Performance Efficiency are foundational capabilities in the AWS Cloud Adoption Framework.",
    multiSelect: true,
  },
  {
    question:
      "134. To optimize long-term compute costs of AWS Lambda functions and Amazon EC2 instances, which AWS purchase option should be chosen?",
    options: [
      "A. Dedicated Hosts",
      "B. Compute Savings Plans",
      "C. Reserved Instances",
      "D. Spot Instances",
    ],
    answer: "B. Compute Savings Plans",
    explanation:
      "Compute Savings Plans offer up to 66% off and are suitable for long-term compute cost optimization.",
    multiSelect: false,
  },
  {
    question:
      "135. For cloud-compatible in-memory data store, which AWS service should be used?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon ElastiCache",
      "C. Amazon EBS",
      "D. Amazon Redshift",
    ],
    answer: "B. Amazon ElastiCache",
    explanation:
      "Amazon ElastiCache offers scalable in-memory data store solutions, compatible with open-source engines.",
    multiSelect: false,
  },
  {
    question:
      "136. Which AWS service or tool provides on-demand access to AWS security and compliance reports?",
    options: [
      "A. AWS Artifact",
      "B. AWS Trusted Advisor",
      "C. Amazon Inspector",
      "D. AWS Billing Console",
    ],
    answer: "A. AWS Artifact",
    explanation:
      "AWS Artifact provides on-demand access to AWS security and compliance reports and agreements.",
    multiSelect: false,
  },
  {
    question:
      "137. Which AWS support plan includes concierge service, a designated technical account manager (TAM), and 24/7 technical support?",
    options: [
      "A. AWS Basic Support",
      "B. AWS Enterprise Support",
      "C. AWS Business Support",
      "D. AWS Developer Support",
    ],
    answer: "B. AWS Enterprise Support",
    explanation:
      "AWS Enterprise Support offers concierge service, a designated TAM, and 24/7 technical support.",
    multiSelect: false,
  },
  {
    question:
      "138. To securely deliver static files globally, which AWS solution should be used?",
    options: [
      "A. Amazon Kinesis Data Streams",
      "B. Amazon CloudFront with Amazon S3",
      "C. Amazon EC2 instances with an Application Load Balancer",
      "D. Amazon EFS",
    ],
    answer: "B. Amazon CloudFront with Amazon S3",
    explanation:
      "Amazon CloudFront with Amazon S3 provides a secure and fast way to globally deliver static files.",
    multiSelect: false,
  },
  {
    question:
      "139. Which design principle is included in the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "A. Create annotated documentation",
      "B. Anticipate failure",
      "C. Ensure performance efficiency",
      "D. Optimize costs",
    ],
    answer: "A. Create annotated documentation",
    explanation:
      "Create annotated documentation supports operational excellence by improving understanding and management of workloads.",
    multiSelect: false,
  },
  {
    question:
      "140. To migrate Microsoft SQL Server from on-premises to the AWS cloud with reduced management overhead, which AWS service should be used?",
    options: [
      "A. Amazon Elastic Container Service",
      "B. Amazon SageMaker",
      "C. Amazon RDS",
      "D. Amazon Athena",
    ],
    answer: "C. Amazon RDS",
    explanation:
      "Amazon RDS supports multiple database engines, including Microsoft SQL Server, reducing management overhead.",
    multiSelect: false,
  },
  {
    question:
      "141. In the AWS Shared Responsibility Model, what does 'security of the cloud' refer to?",
    options: [
      "A. Availability of AWS services",
      "B. Security of cloud infrastructure",
      "C. Password policies for IAM users",
      "D. Security of customer environments",
    ],
    answer: "B. Security of cloud infrastructure",
    explanation:
      "'Security of the cloud' refers to AWS's responsibility in protecting the infrastructure that runs AWS services.",
    multiSelect: false,
  },
  {
    question:
      "142. For a shopping application that requires a managed database service for data storage, which AWS service should be used?",
    options: [
      "A. Amazon RDS",
      "B. Amazon Redshift",
      "C. Amazon ElastiCache",
      "D. Amazon Neptune",
    ],
    answer: "A. Amazon RDS",
    explanation:
      "Amazon RDS is suitable for applications that require managed relational database services.",
    multiSelect: false,
  },
  {
    question:
      "143. Which AWS service or tool helps companies measure the environmental impact of their AWS usage?",
    options: [
      "A. AWS Customer Carbon Footprint Tool",
      "B. AWS Compute Optimizer",
      "C. Sustainability Pillar",
      "D. OS-Climate",
    ],
    answer: "A. AWS Customer Carbon Footprint Tool",
    explanation:
      "The AWS Customer Carbon Footprint Tool provides insights into the environmental impact of AWS usage.",
    multiSelect: false,
  },
  {
    question:
      "144. To deploy monitoring applications closest to factory machines with the least latency, which AWS solution should be used?",
    options: [
      "A. AWS Outposts",
      "B. Amazon EC2",
      "C. AWS App Runner",
      "D. AWS Batch",
    ],
    answer: "A. AWS Outposts",
    explanation:
      "AWS Outposts allows deploying AWS services closer to on-premises facilities, reducing latency.",
    multiSelect: false,
  },
  {
    question:
      "145. To improve sustainability impact, which recommended practices should a company implement? (Select TWO.)",
    options: [
      "A. Scale infrastructure with user load",
      "B. Maximize distance between workloads and user locations",
      "C. Eliminate unused assets",
      "D. Scale resources with excess capacity",
      "E. Scale infrastructure based on user count",
    ],
    answer: [
      "A. Scale infrastructure with user load",
      "C. Eliminate unused assets",
    ],
    explanation:
      "Scaling infrastructure with user load and eliminating unused assets help reduce waste and improve sustainability.",
    multiSelect: true,
  },
  {
    question:
      "146. In the AWS Shared Responsibility Model, which tasks are AWS's responsibility? (Select TWO.)",
    options: [
      "A. Configure IAM",
      "B. Configure EC2 instance security groups",
      "C. Secure access to AWS facilities",
      "D. Apply patches to applications on EC2 instances",
      "E. Maintain infrastructure",
    ],
    answer: [
      "C. Secure access to AWS facilities",
      "E. Maintain infrastructure",
    ],
    explanation:
      "AWS is responsible for securing physical access to facilities and maintaining infrastructure in the Shared Responsibility Model.",
    multiSelect: true,
  },
  {
    question:
      "147. In which categories does AWS Trusted Advisor provide recommended actions? (Select TWO.)",
    options: [
      "A. Operating system patches",
      "B. Cost optimization",
      "C. Repetitive tasks",
      "D. Service quotas",
      "E. Account activity logs",
    ],
    answer: ["B. Cost optimization", "D. Service quotas"],
    explanation:
      "AWS Trusted Advisor is a service that provides real-time guidance to help you provision your resources following AWS best practices. Trusted Advisor provides recommended actions in five categories: cost optimization, performance, security, fault tolerance, and service quotas.",
    multiSelect: true,
  },
  {
    question: "148. Which AWS service is always free for users?",
    options: [
      "A. Amazon S3",
      "B. Amazon Aurora",
      "C. Amazon EC2",
      "D. AWS Identity and Access Management (IAM)",
    ],
    answer: "D. AWS Identity and Access Management (IAM)",
    explanation:
      "AWS Identity and Access Management (IAM) is a service that enables users to manage access to AWS services and resources. IAM is always free for users.",
    multiSelect: false,
  },
  {
    question:
      "149. A company wants to improve the global performance of its web-based e-commerce service. What should the company do to meet this requirement?",
    options: [
      "A. Change the S3 storage class to S3 Intelligent-Tiering.",
      "B. Implement an Amazon CloudFront distribution to cache web server content.",
      "C. Use Amazon API Gateway for the web service.",
      "D. Migrate the website e-commerce servers to Amazon EC2 with enhanced networking.",
    ],
    answer:
      "B. Implement an Amazon CloudFront distribution to cache web server content.",
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.",
    multiSelect: false,
  },

  {
    question:
      "150. Which AWS services or tools are designed to protect a workload from SQL injection, cross-site scripting, and DDoS attacks? (Select TWO.)",
    options: [
      "A. VPC endpoint",
      "B. AWS Shield Standard",
      "C. AWS Config",
      "D. AWS WAF",
    ],
    answer: ["B. AWS Shield Standard", "D. AWS WAF"],
    explanation:
      "AWS Shield Standard and AWS WAF are services designed to protect workloads against SQL injection, cross-site scripting, and DDoS attacks.",
    multiSelect: true,
  },
  {
    question:
      "151. A company is building an application that will receive millions of database queries per second. Which AWS service will meet this need?",
    options: [
      "A. Amazon DynamoDB",
      "B. AWS Cloud9",
      "C. Amazon ElastiCache for Memcached",
      "D. Amazon Neptune",
    ],
    answer: "A. Amazon DynamoDB",
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
    multiSelect: false,
  },
  {
    question:
      "152. A company is using Amazon RDS and wants to increase the resiliency of their business-critical application. How can the company increase the resiliency of this application?",
    options: [
      "A. Implement a copy of the application in another AWS account.",
      "B. Use multiple VPCs for the application.",
      "C. Use multiple subnets for the application.",
      "D. Use multiple Availability Zones.",
    ],
    answer: "D. Use multiple Availability Zones.",
    explanation:
      "Using multiple Availability Zones is the best way to increase the resiliency of the application, maintaining high availability even in the case of failures.",
    multiSelect: false,
  },
  {
    question:
      "153. A developer needs to maintain a development environment infrastructure and a production environment in a repeatable manner. Which AWS service should the developer use to meet these requirements?",
    options: [
      "A. AWS Ground Station",
      "B. AWS Shield",
      "C. AWS IoT Device Defender",
      "D. AWS CloudFormation",
    ],
    answer: "D. AWS CloudFormation",
    explanation:
      "AWS CloudFormation allows you to model and provision AWS and third-party resources in a predictable and repeatable manner, ideal for maintaining multiple environments.",
    multiSelect: false,
  },
  {
    question:
      "154. Which actions are examples of a company's effort to right-size their AWS resources to control cloud costs? (Select TWO.)",
    options: [
      "A. Switching from Amazon RDS to Amazon DynamoDB.",
      "B. Selecting Amazon EC2 instance types based on previous utilization patterns.",
      "C. Using Amazon S3 lifecycle policies to move infrequently accessed objects to lower-cost storage tiers.",
      "D. Using Multi-AZ deployments for Amazon RDS.",
      "E. Replacing existing Amazon EC2 instances with AWS Elastic Beanstalk.",
    ],
    answer: [
      "B. Selecting Amazon EC2 instance types based on previous utilization patterns.",
      "C. Using Amazon S3 lifecycle policies to move infrequently accessed objects to lower-cost storage tiers.",
    ],
    explanation:
      "Selecting EC2 instance types based on past utilization and using S3 lifecycle policies to reduce costs are cost optimization strategies.",
    multiSelect: true,
  },
  {
    question:
      "155. A company suspects their AWS resources are being used for illegal activities. Which AWS group or team should the company notify?",
    options: [
      "A. AWS Abuse Team",
      "B. AWS Support Team",
      "C. AWS Technical Account Managers",
      "D. AWS Professional Services Team",
    ],
    answer: "A. AWS Abuse Team",
    explanation:
      "In case of suspected illegal activities, the company should notify the AWS Abuse Team.",
    multiSelect: false,
  },
  {
    question:
      "156. A company has an Amazon S3 bucket containing images of scanned financial invoices. The company is building an AI-based application on AWS to identify and read the total balance values on the invoices. Which AWS service will meet these requirements?",
    options: [
      "A. Amazon Forecast",
      "B. Amazon Textract",
      "C. Amazon Rekognition",
      "D. Amazon Lex",
    ],
    answer: "B. Amazon Textract",
    explanation:
      "Amazon Textract is capable of extracting text and data from scanned documents, ideal for reading values on invoices.",
    multiSelect: false,
  },
  {
    question:
      "157. Which benefit of the AWS cloud helps companies to achieve lower usage costs due to the aggregate usage of all AWS users?",
    options: [
      "A. No need to guess capacity",
      "B. Ability to go global in minutes",
      "C. Economies of scale",
      "D. Increased speed and agility",
    ],
    answer: "C. Economies of scale",
    explanation:
      "Economies of scale allow AWS to offer lower costs as a result of the aggregate usage of all AWS users.",
    multiSelect: false,
  },
  {
    question:
      "158. (BONUS QUESTION SAA-03) A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents on an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that each time they refreshed the website, they could see a subset of their documents or the other, but never all documents at the same time. What should the solutions architect propose to ensure users see all their documents at once?",
    options: [
      "A. Copy the data so both EBS volumes contain all documents",
      "B. Configure the Application Load Balancer to route a user to the server with the documents",
      "C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS",
      "D. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server",
    ],
    answer:
      "C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS",
    explanation:
      "The ideal solution involves using Amazon EFS, which is a storage system that can be accessed simultaneously by multiple EC2 instances from different Availability Zones, ensuring that all users see all their documents regardless of the instance they are routed to by the Application Load Balancer.",
    multiSelect: false,
  },
  {
    question:
      "159. A company is running workloads for multiple departments within a single VPC. The company needs to be able to bill each department for their resource usage. Which action should the company take to accomplish this goal with the LEAST operational overhead?",
    options: [
      "A. Add a department tag to each resource and configure cost allocation tags.",
      "B. Move each department's resources to their own VPC.",
      "C. Move each department's resources to their own AWS account.",
      "D. Use AWS Organizations to get a billing report for each department.",
    ],
    answer: [
      "A. Add a department tag to each resource and configure cost allocation tags.",
    ],
    explanation:
      "Adding a department tag to each resource and configuring cost allocation tags is an action that can help you achieve the goal of billing each department for their resource usage with the least operational overhead.",
    multiSelect: false,
  },
  {
    question:
      "160. A company needs a repository that stores source code. The company needs a way to update running software when the code changes. Which combination of AWS services meets these requirements? (Select TWO.)",
    options: [
      "A. AWS CodeCommit",
      "B. AWS CodeDeploy",
      "C. Amazon DynamoDB",
      "D. Amazon S3",
      "E. Amazon Elastic Container Service (Amazon ECS)",
    ],
    answer: ["A. AWS CodeCommit", "B. AWS CodeDeploy"],
    explanation:
      "AWS CodeCommit and AWS CodeDeploy are correct because AWS CodeCommit is a service that provides a fully managed source control service that hosts secure Git repositories, and AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and on-premises servers.",
    multiSelect: true,
  },
  {
    question:
      "161. A company has an application workload that is designed to be stateless and can withstand occasional interruptions. The application performs massively parallel computations. Which Amazon EC2 instance pricing model should the company choose to reduce costs?",
    options: [
      "A. On-Demand Instances",
      "B. Spot Instances",
      "C. Reserved Instances",
      "D. Dedicated Instances",
    ],
    answer: "B. Spot Instances",
    explanation:
      "Spot Instances allow you to take advantage of unused EC2 capacity in the AWS cloud available at up to a 90% discount compared to On-Demand prices.",
    multiSelect: false,
  },
  {
    question:
      "162. A manufacturing company has a mission-critical application that runs in a remote location with a slow internet connection. The company wants to migrate the workload to AWS. The application is latency-sensitive and prone to connectivity disruptions. Which AWS service or feature should the company use to meet these requirements?",
    options: [
      "A. Availability Zones",
      "B. AWS Local Zones",
      "C. AWS Wavelength",
      "D. AWS Outposts",
    ],
    answer: "D. AWS Outposts",
    explanation:
      "AWS Outposts is a service that offers fully managed and configurable compute and storage racks, allowing you to run workloads on-premises and connect to AWS services in the cloud.",
    multiSelect: false,
  },
  {
    question:
      "163. Which AWS service is designed to help users orchestrate a workflow process for a set of AWS Lambda functions?",
    options: [
      "A. Amazon DynamoDB",
      "B. AWS CodePipeline",
      "C. AWS Batch",
      "D. AWS Step Functions",
    ],
    answer: "D. AWS Step Functions",
    explanation:
      "AWS Step Functions is a service that allows you to coordinate multiple AWS services into serverless workflows that can be triggered by events.",
    multiSelect: false,
  },
  {
    question:
      "165. A company provides a software as a service (SaaS) application. The company has a new customer that is based in a different country. The new customer's data needs to be hosted in that country. Which AWS service or infrastructure component should the company use to meet this requirement?",
    options: [
      "A. AWS Shield",
      "B. Amazon S3 Object Lock",
      "C. AWS Regions",
      "D. Placement groups",
    ],
    answer: "C. AWS Regions",
    explanation:
      "AWS Regions are geographic areas around the world where AWS has clusters of data centers. By hosting the customer's data in a specific AWS Region, the company can meet the requirement of hosting the data in the customer's country.",
    multiSelect: false,
  },
  {
    question:
      "166. A company needs to host a web server on Amazon EC2 instances for at least 1 year. The web server cannot tolerate interruptions. Which EC2 instance purchase option will meet these requirements in the MOST cost-effective way?",
    options: [
      "A. On-Demand Instances",
      "B. Reserved Instances with Partial Upfront payment",
      "C. Spot Instances",
      "D. Reserved Instances with No Upfront payment",
    ],
    answer: ["B. Reserved Instances with Partial Upfront payment"],
    explanation:
      "Reserved Instances with Partial Upfront payment are the most cost-effective option for predictable workloads that require continuous operation.",
    multiSelect: false,
  },
  {
    question:
      "167. Which group shares responsibility with AWS for the security and compliance of AWS accounts and resources?",
    options: [
      "A. Outsourced vendors",
      "B. Customers",
      "C. Reseller partners",
      "D. Internet providers",
    ],
    answer: ["B. Customers"],
    explanation:
      "In the AWS Shared Responsibility Model, customers are responsible for security 'in the cloud', which includes access control and data management.",
    multiSelect: false,
  },
  {
    question:
      "168. A company has set up a VPC in its AWS account and created a subnet in the VPC. The company wants to make the subnet public. Which AWS resources should the company use to meet this requirement? (Select TWO.)",
    options: [
      "A. Amazon VPC internet gateway",
      "B. Amazon VPC NAT gateway",
      "C. Amazon VPC route tables",
      "D. Amazon VPC network ACLs",
      "E. Amazon EC2 security groups",
    ],
    answer: ["A. Amazon VPC internet gateway", "C. Amazon VPC route tables"],
    explanation:
      "To make a subnet public, the company needs to use an Amazon VPC internet gateway and configure appropriate route tables.",
    multiSelect: true,
  },
  {
    question:
      "169. Which AWS tool or service should a company use to forecast AWS spending?",
    options: [
      "A. Amazon DevPay",
      "B. AWS Organizations",
      "C. AWS Trusted Advisor",
      "D. Cost Explorer",
    ],
    answer: ["D. Cost Explorer"],
    explanation:
      "Cost Explorer is a tool that allows users to analyze and forecast AWS spending, helping to plan future budgets.",
    multiSelect: false,
  },
  {
    question:
      "170. Which of the following is a customer responsibility, according to the AWS Shared Responsibility Model?",
    options: [
      "A. Identity and access management",
      "B. Hard drive disposal",
      "C. Data center hardware security",
      "D. Availability Zone security",
    ],
    answer: ["A. Identity and access management"],
    explanation:
      "In the AWS Shared Responsibility Model, identity and access management is a customer responsibility.",
    multiSelect: false,
  },
  {
    question:
      "171. Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Select TWO.)",
    options: [
      "A. Performance and capacity management",
      "B. Data engineering",
      "C. Continuous integration and continuous delivery (CI/CD)",
      "D. Infrastructure protection",
      "E. Change and release management",
    ],
    answer: [
      "B. Data engineering",
      "C. Continuous integration and continuous delivery (CI/CD)",
    ],
    explanation:
      "These are two of the seven capabilities that are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF). The platform perspective helps you build a scalable and enterprise-grade hybrid cloud platform, modernize existing workloads, and implement new cloud-native solutions.",
    multiSelect: true,
  },
  {
    question:
      "172. A company wants to query their server logs for insights on their customers' experiences. Which AWS service will store this data MOST cost-effectively?",
    options: [
      "A. Amazon Aurora",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon S3",
    ],
    answer: "D. Amazon S3",
    explanation:
      "Amazon S3 is an AWS service that provides scalable, durable, and cost-effective object storage in the cloud. Amazon S3 can store any amount and type of data, such as server logs, and offers multiple storage classes with different performance and price characteristics.",
    multiSelect: false,
  },
  {
    question:
      "173. A company wants to generate a list of IAM users. The company also wants to view the status of various credentials associated with the users, such as passwords, access keys, and multi-factor authentication (MFA) devices. Which AWS service or feature will meet these requirements?",
    options: [
      "A. IAM credential report",
      "B. AWS IAM Identity Center (AWS Single Sign-On)",
      "C. AWS Identity and Access Management Access Analyzer",
      "D. AWS Cost and Usage Report",
    ],
    answer: "A. IAM credential report",
    explanation:
      "An IAM credential report is a feature of AWS Identity and Access Management (IAM) that allows you to view and download a report that lists all the IAM users in your account and the status of their various credentials, such as passwords, access keys, and MFA devices.",
    multiSelect: false,
  },
  {
    question:
      "174. Which AWS service provides a single place to track the progress of application migrations?",
    options: [
      "A. AWS Application Discovery Service",
      "B. AWS Application Migration Service",
      "C. AWS Service Catalog",
      "D. AWS Migration Hub",
    ],
    answer: "D. AWS Migration Hub",
    explanation:
      "AWS Migration Hub is a service that provides a single place to track the progress of application migrations across multiple AWS and partner solutions. It allows you to choose the AWS and partner migration tools that best fit your needs, while providing visibility into the status of migrations across your application portfolio.",
    multiSelect: false,
  },
  {
    question:
      "175. A company runs an on-premises MySQL database. The company wants to run a copy of this database in the AWS cloud. Which AWS service would support this workload?",
    options: [
      "A. Amazon RDS",
      "B. Amazon Neptune",
      "C. Amazon ElastiCache for Redis",
      "D. Amazon Quantum Ledger Database (Amazon QLDB)",
    ],
    answer: "A. Amazon RDS",
    explanation:
      "Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups. Amazon RDS supports six popular database engines: Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server.",
    multiSelect: false,
  },
  {
    question:
      "176. A company needs to implement identity management for a fleet of mobile applications running in the AWS cloud. Which AWS service will meet this requirement?",
    options: [
      "A. Amazon Cognito",
      "B. AWS Security Hub",
      "C. AWS Shield",
      "D. AWS WAF",
    ],
    answer: "A. Amazon Cognito",
    explanation:
      "Amazon Cognito is a service that provides user identity and authentication for mobile and web applications, allowing users to sign up, sign in, and access AWS resources with different identity providers.",
    multiSelect: false,
  },
  {
    question:
      "177. A company needs an automated vulnerability management service that continuously scans AWS workloads for software vulnerabilities. Which AWS service will meet these requirements?",
    options: [
      "A. Amazon GuardDuty",
      "B. Amazon Inspector",
      "C. AWS Security Hub",
      "D. AWS Shield",
    ],
    answer: "B. Amazon Inspector",
    explanation:
      "Amazon Inspector is an automated vulnerability management service that continuously scans AWS workloads for software vulnerabilities and unintended network exposure. Amazon Inspector automatically discovers workloads such as Amazon EC2 instances, containers, and Lambda functions, and scans them for software vulnerabilities and unintended network exposure.",
    multiSelect: false,
  },
  {
    question:
      "178. Which tasks are customer responsibilities, according to the AWS Shared Responsibility Model? (Select TWO.)",
    options: [
      "A. Configure the AWS-provided security group firewall.",
      "B. Classify the company's assets on the AWS cloud.",
      "C. Determine which Availability Zones to use for Amazon S3 buckets.",
      "D. Patch or update Amazon DynamoDB.",
      "E. Select Amazon EC2 instances to run AWS Lambda.",
      "F. AWS Config",
    ],
    answer: [
      "A. Configure the AWS-provided security group firewall.",
      "B. Classify the company's assets on the AWS cloud.",
    ],
    explanation:
      "According to the AWS Shared Responsibility Model, the customer is responsible for security in the cloud, which includes the tasks of configuring the AWS-provided security group firewall and classifying the company's assets on the AWS cloud.",
    multiSelect: true,
  },
  {
    question:
      "179. A company wants to monitor the performance of their workload. The company wants to ensure that cloud services are delivered at a level that meets their business needs. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) will meet these requirements?",
    options: ["A. Business", "B. Governance", "C. Platform", "D. Operations"],
    answer: "D. Operations",
    explanation:
      "The Operations perspective helps you monitor and manage your cloud workloads to ensure that they are delivered at a level that meets your business needs. Common stakeholders include the chief operating officer (COO), cloud director, cloud operations manager, and cloud operations engineers.",
    multiSelect: false,
  },
  {
    question:
      "180. A company needs a managed machine learning (ML) service that can recommend products based on a customer's previous behaviors. Which AWS service meets this requirement?",
    options: [
      "A. Amazon Personalize",
      "B. Amazon SageMaker",
      "C. Amazon Pinpoint",
      "D. Amazon Comprehend",
    ],
    answer: "A. Amazon Personalize",
    explanation:
      "Amazon Personalize is a fully managed service that allows developers to create customized recommendations for customers using their own data. Amazon Personalize can process and examine data, identify what is meaningful, select the right algorithms, and train and optimize a personalized recommendation model automatically.",
    multiSelect: false,
  },
  {
    question:
      "181. What is the purpose of having an Internet gateway within a VPC?",
    options: [
      "A. Create a VPN connection to the VPC",
      "B. Allow communication between the VPC and the Internet",
      "C. Enforce bandwidth restrictions on Internet traffic",
      "D. Load balance Internet traffic across Amazon EC2 instances",
    ],
    answer: "B. Allow communication between the VPC and the Internet",
    explanation:
      "An Internet gateway is a service that allows Internet traffic to come into a VPC. Otherwise, a VPC is completely segmented and the only way to access it is potentially through a VPN connection rather than an Internet connection. An Internet gateway is a logical connection between an AWS VPC and the Internet. It supports IPv4 and IPv6 traffic and does not cause availability risks or bandwidth constraints on network traffic.",
    multiSelect: false,
  },
  {
    question:
      "182. A company is building a mobile application to provide purchase recommendations to its customers. The company wants to use a graph database as part of the purchase recommendation engine. Which AWS database service should the company choose?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon Aurora",
      "C. Amazon Neptune",
      "D. Amazon DocumentDB (with MongoDB compatibility)",
    ],
    answer: "C. Amazon Neptune",
    explanation:
      "Amazon Neptune is a service that provides a fully managed graph database that supports both property graphs and RDF graphs. It can be used to build applications that work with highly connected datasets, such as purchase recommendations, social networks, fraud detection, and knowledge graphs.",
    multiSelect: false,
  },
  {
    question:
      "183. A company has teams with different job functions and responsibilities. The company's employees frequently change teams. The company needs to manage the employees' permissions to be appropriate for the job responsibilities. Which IAM feature should the company use to meet this requirement with the LEAST operational overhead?",
    options: [
      "A. IAM user groups",
      "B. IAM roles",
      "C. IAM instance profiles",
      "D. IAM policies for individual users",
    ],
    answer: "B. IAM roles",
    explanation:
      "IAM roles are a way to grant temporary permissions to entities that need to access AWS resources, such as users, applications, or services. IAM roles allow customers to assign permissions to entities without having to create or manage IAM users or credentials for them.",
    multiSelect: false,
  },
  {
    question:
      "184. A company wants to design a reliable web application hosted on Amazon EC2. Which approach will achieve this goal?",
    options: [
      "A. Launch large EC2 instances in the same Availability Zone.",
      "B. Spread EC2 instances across more than one security group.",
      "C. Spread EC2 instances across more than one Availability Zone.",
      "D. Use an Amazon Machine Image (AMI) from the AWS Marketplace.",
    ],
    answer: "C. Spread EC2 instances across more than one Availability Zone.",
    explanation:
      "The approach that will achieve the goal of designing a reliable web application hosted on Amazon EC2 is to spread the EC2 instances across more than one Availability Zone. An Availability Zone is a physically isolated location within an AWS Region that has its own power, cooling, and network connectivity. By spreading EC2 instances across multiple Availability Zones, users can increase the fault tolerance and availability of their web applications, while reducing latency for end-users.",
    multiSelect: false,
  },
  {
    question:
      "185. What is the customer's responsibility when using AWS Lambda according to the AWS Shared Responsibility Model?",
    options: [
      "A. Manage the code within the Lambda function",
      "B. Confirm that hardware is functioning in the data center",
      "C. Apply patches to the operating system",
      "D. Turn off Lambda functions when no longer in use",
    ],
    answer: "A. Manage the code within the Lambda function",
    explanation:
      "According to the AWS Shared Responsibility Model, AWS is responsible for the security of the cloud, while customers are responsible for security in the cloud. This means that AWS is responsible for the physical servers, network, and operating system that run the Lambda functions, while customers are responsible for the security of their code and AWS IAM for the Lambda service and within their function.",
    multiSelect: false,
  },
  {
    question:
      "186. A development team wants to deploy multiple test environments for an application quickly and in a repeatable way. Which AWS service should the team use?",
    options: [
      "A. Amazon EC2",
      "B. AWS CloudFormation",
      "C. Amazon QuickSight",
      "D. Amazon Elastic Container Service (Amazon ECS)",
    ],
    answer: "B. AWS CloudFormation",
    explanation:
      "AWS CloudFormation is a service that allows you to model and provision your AWS resources using templates. You can define your infrastructure as code and automate the creation and updating of your resources. AWS CloudFormation also supports nested stacks, change sets, and rollback features to help you manage complex and dynamic environments.",
    multiSelect: false,
  },
  {
    question:
      "187. A developer wants to quickly deploy an application on AWS without manually creating the necessary resources. Which AWS service will meet these requirements?",
    options: [
      "A. Amazon EC2",
      "B. AWS Elastic Beanstalk",
      "C. AWS CodeBuild",
      "D. Amazon Personalize",
    ],
    answer: "B. AWS Elastic Beanstalk",
    explanation:
      "AWS Elastic Beanstalk is a service that allows you to deploy and manage applications on AWS without creating and configuring the necessary resources manually, such as EC2 instances, load balancers, security groups, databases, and more. AWS Elastic Beanstalk automatically handles the provisioning, scaling, load balancing, health monitoring, and updating of your application while giving you full control over the underlying AWS resources if needed.",
    multiSelect: false,
  },
  {
    question:
      "188. Which AWS services can a company use to achieve a loosely coupled architecture? (Select TWO.)",
    options: [
      "A. Amazon Workspaces",
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "C. Amazon Connect",
      "D. AWS Trusted Advisor",
      "E. AWS Step Functions",
    ],
    answer: [
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "E. AWS Step Functions",
    ],
    explanation:
      "Amazon Simple Queue Service (Amazon SQS) and AWS Step Functions are AWS services that can be used to achieve a loosely coupled architecture. Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. AWS Step Functions allows you to coordinate multiple AWS services into serverless workflows so you can build and update apps quickly.",
    multiSelect: true,
  },
  {
    question:
      "189. A company needs to control incoming and outgoing traffic to an Amazon EC2 instance. Which AWS service or feature can the company associate with the EC2 instance to meet this requirement?",
    options: [
      "A. Network ACL",
      "B. Security group",
      "C. AWS WAF",
      "D. VPC route tables",
    ],
    answer: "B. Security group",
    explanation:
      "A security group is a virtual firewall that can be associated with an Amazon EC2 instance to control incoming and outgoing traffic to and from the instance. You can specify which protocols, ports, and source or destination IP ranges are allowed or denied by the security group.",
    multiSelect: false,
  },
  {
    question:
      "190. A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective way?",
    options: [
      "A. Amazon Redshift",
      "B. Amazon Athena",
      "C. Amazon Kinesis",
      "D. Amazon RDS",
    ],
    answer: "B. Amazon Athena",
    explanation:
      "Amazon Athena is a serverless interactive query service that allows users to run SQL queries on data stored in Amazon S3. It is ideal for ad-hoc queries on large datasets, as it does not require provisioning, configuring, or managing servers. Users only pay for the queries they run, based on the amount of data scanned.",
    multiSelect: false,
  },
  {
    question:
      "191. A company wants to migrate its database to an AWS managed service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Select TWO)",
    options: [
      "A. Amazon Athena",
      "B. Amazon RDS",
      "C. Amazon EC2",
      "D. Amazon DynamoDB",
      "E. Amazon Aurora",
    ],
    answer: ["B. Amazon RDS", "E. Amazon Aurora"],
    explanation:
      "Amazon RDS and Amazon Aurora are AWS managed services that support the PostgreSQL database engine. Amazon RDS makes it easy to set up, operate, and scale PostgreSQL deployments in the cloud, while Amazon Aurora is a cloud-native database engine compatible with PostgreSQL and offers higher performance and availability.",
    multiSelect: true,
  },
  {
    question:
      "192. A company's application has high customer usage at certain times of the day. The company wants to reduce the number of running Amazon EC2 instances when application usage is low. Which AWS service or instance purchase option should the company use to meet this requirement?",
    options: [
      "A. EC2 Instance Savings Plans",
      "B. Spot Instances",
      "C. Reserved Instances",
      "D. Amazon EC2 Auto Scaling",
    ],
    answer: "D. Amazon EC2 Auto Scaling",
    explanation:
      "Amazon EC2 Auto Scaling is an AWS service that can help users reduce the number of running Amazon EC2 instances when application usage is low. Amazon EC2 Auto Scaling allows users to create scaling policies that automatically adjust the number of EC2 instances based on demand or on a schedule.",
    multiSelect: false,
  },
  {
    question:
      "193. A company is running an on-premises monolithic application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and break it into microservices. Which AWS Well-Architected Framework best practice is the company following with this plan?",
    options: [
      "A. Integrate functional testing as part of deployment into AWS.",
      "B. Use automation to make changes.",
      "C. Deploy the application in multiple locations.",
      "D. Implement loosely coupled dependencies.",
    ],
    answer: "D. Implement loosely coupled dependencies.",
    explanation:
      "The company is following the best practice of implementing loosely coupled dependencies by migrating the application to AWS and breaking it into microservices. Loosely coupled dependencies are a design principle of the AWS Well-Architected Framework that helps reduce interdependencies between components and improve system scalability, reliability, and performance.",
    multiSelect: false,
  },
  {
    question:
      "194. Which AWS service or feature allows users to encrypt data at rest in Amazon S3?",
    options: [
      "A. IAM policies",
      "B. Server-side encryption",
      "C. Amazon GuardDuty",
      "D. Client-side encryption",
    ],
    answer: "B. Server-side encryption",
    explanation:
      "Server-side encryption is an encryption option that Amazon S3 provides to encrypt data at rest in Amazon S3. With server-side encryption, Amazon S3 encrypts an object before saving it to disk in its data centers and decrypts it when you download the objects.",
    multiSelect: false,
  },

  {
    question:
      "195. An IT engineer needs to access AWS services from an on-premises application. What credentials or keys does the application need for authentication?",
    options: [
      "A. AWS account username and password",
      "B. IAM access key and secret",
      "C. Amazon EC2 key pairs",
      "D. AWS Key Management Service (AWS KMS) keys",
    ],
    answer: "B. IAM access key and secret",
    explanation:
      "IAM access keys are long-term credentials that consist of an access key ID and a secret access key. You use access keys to sign programmatic requests that you make to AWS. If you need to access AWS services from an on-premises application, you can use IAM access keys to authenticate your requests.",
    multiSelect: false,
  },
  {
    question:
      "196. A company wants to migrate its high-performance computing (HPC) application to Amazon EC2 instances. The application has multiple components and must have fault tolerance and automatic failover capabilities. Which AWS infrastructure solution will meet these requirements with the LEAST latency between components?",
    options: [
      "A. Multiple AWS Regions",
      "B. Multiple edge locations",
      "C. Multiple Availability Zones",
      "D. Regional edge caches",
    ],
    answer: "C. Multiple Availability Zones",
    explanation:
      "Using EC2 instances in multiple Availability Zones is an AWS infrastructure solution that meets the requirements of migrating a high-performance computing (HPC) application to AWS with fault tolerance and failover capabilities, and with the least latency between components.",
    multiSelect: false,
  },
  {
    question:
      "197. Elasticity in the AWS cloud refers to which of the following? (Select TWO.)",
    options: [
      "A. How quickly an Amazon EC2 instance can be restarted",
      "B. The ability to scale resources as demand changes",
      "C. The maximum amount of RAM an Amazon EC2 instance can use",
      "D. The pay-for-what-you-use billing model",
      "E. How easily resources can be obtained when needed",
    ],
    answer: [
      "B. The ability to scale resources as demand changes",
      "E. How easily resources can be obtained when needed",
    ],
    explanation:
      "Elasticity in the AWS cloud refers to the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to do this automatically. This means that you can scale resources as demand changes and can easily obtain resources when they are needed.",
    multiSelect: true,
  },
  {
    question:
      "198. Which AWS services or features allow users to create a network connection between two VPCs? (Select TWO.)",
    options: [
      "A. VPC endpoints",
      "B. Amazon Route 53",
      "C. VPC peering",
      "D. AWS Direct Connect",
      "E. AWS Transit Gateway",
    ],
    answer: ["C. VPC peering", "E. AWS Transit Gateway"],
    explanation:
      "VPC peering and AWS Transit Gateway are two AWS services or features that allow users to create a network connection between two VPCs.",
    multiSelect: true,
  },
  {
    question:
      "199. A company has a physical tape library for storing data backups. The tape library is running out of space. The company needs to extend the tape library capacity to the AWS cloud. Which AWS service should the company use to meet this requirement?",
    options: [
      "A. Amazon Elastic File System (Amazon EFS)",
      "B. Amazon Elastic Block Store (Amazon EBS)",
      "C. Amazon S3",
      "D. AWS Storage Gateway",
    ],
    answer: "D. AWS Storage Gateway",
    explanation:
      "AWS Storage Gateway is a hybrid cloud storage service that provides on-premises access to virtually unlimited cloud storage. You can use AWS Storage Gateway to simplify storage management and reduce costs for hybrid cloud storage use cases. One of these use cases is tape-based backup, which allows you to store data backups on virtual tapes in the AWS cloud.",
    multiSelect: false,
  },
  {
    question:
      "200. Which AWS service provides encryption at rest for Amazon RDS and for Amazon Elastic Block Store (Amazon EBS) volumes?",
    options: [
      "A. AWS Lambda",
      "B. AWS Key Management Service (AWS KMS)",
      "C. AWS WAF",
      "D. Amazon Rekognition",
    ],
    answer: "B. AWS Key Management Service (AWS KMS)",
    explanation:
      "AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. AWS KMS provides centralized control over the encryption keys used to protect your data. You can use AWS KMS to encrypt data in Amazon RDS and Amazon EBS volumes.",
    multiSelect: false,
  },
  {
    question:
      "1. Which AWS service can be used to detect and respond to malicious activities occurring in your AWS environment?",
    options: [
      "A. AWS Shield",
      "B. AWS GuardDuty",
      "C. AWS Security Hub",
      "D. AWS Macie",
    ],
    answer: "B. AWS GuardDuty",
    explanation:
      "AWS GuardDuty continuously monitors and analyzes data for potential malicious activities, helping detect and respond to security threats in your AWS environment.",
    multiSelect: false,
  },
  {
    question:
      "2. A company wants to ensure that its EC2 instances are properly patched for compliance and security purposes. Which AWS service should the company use?",
    options: [
      "A. AWS Systems Manager",
      "B. AWS CloudTrail",
      "C. AWS OpsWorks",
      "D. AWS Config",
    ],
    answer: "A. AWS Systems Manager",
    explanation:
      "AWS Systems Manager provides tools to automatically apply patches to EC2 instances, ensuring they remain compliant with security policies.",
    multiSelect: false,
  },
  {
    question:
      "3. Which AWS service allows you to run code without provisioning or managing servers, and only charges you for the compute time you consume?",
    options: [
      "A. Amazon EC2",
      "B. AWS Lambda",
      "C. AWS Batch",
      "D. AWS Fargate",
    ],
    answer: "B. AWS Lambda",
    explanation:
      "AWS Lambda lets you run code without managing servers and charges only for the compute time you use, making it cost-effective for running small-scale tasks.",
    multiSelect: false,
  },
  {
    question:
      "4. A company is looking to store large volumes of unstructured data, such as videos and images, with high durability and availability. Which AWS service should they use?",
    options: [
      "A. Amazon EFS",
      "B. Amazon S3",
      "C. Amazon RDS",
      "D. Amazon Redshift",
    ],
    answer: "B. Amazon S3",
    explanation:
      "Amazon S3 provides highly durable and scalable object storage for storing large volumes of unstructured data.",
    multiSelect: false,
  },
  {
    question:
      "5. Which AWS service can be used to automate the deployment of infrastructure as code using declarative templates?",
    options: [
      "A. AWS Elastic Beanstalk",
      "B. AWS OpsWorks",
      "C. AWS CloudFormation",
      "D. AWS Config",
    ],
    answer: "C. AWS CloudFormation",
    explanation:
      "AWS CloudFormation allows users to define infrastructure as code using templates and automate the deployment of AWS resources.",
    multiSelect: false,
  },
  {
    question:
      "6. Which AWS service helps you implement a highly available and fault-tolerant architecture by automatically distributing incoming application traffic across multiple targets?",
    options: [
      "A. Amazon Route 53",
      "B. AWS Auto Scaling",
      "C. Elastic Load Balancer",
      "D. Amazon CloudFront",
    ],
    answer: "C. Elastic Load Balancer",
    explanation:
      "Elastic Load Balancer distributes incoming application traffic across multiple targets to ensure high availability and fault tolerance.",
    multiSelect: false,
  },
  {
    question:
      "7. Which AWS service enables you to run big data analytics and process large datasets using the Hadoop framework?",
    options: [
      "A. Amazon RDS",
      "B. Amazon Redshift",
      "C. Amazon EMR",
      "D. AWS Glue",
    ],
    answer: "C. Amazon EMR",
    explanation:
      "Amazon EMR allows you to run big data analytics using the Hadoop framework and process large datasets efficiently.",
    multiSelect: false,
  },
  {
    question:
      "8. A company wants to improve the security of its AWS environment by enabling multi-factor authentication (MFA) for its users. Which AWS service should they use?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Directory Service",
      "C. AWS KMS",
      "D. AWS WAF",
    ],
    answer: "A. AWS Identity and Access Management (IAM)",
    explanation:
      "AWS Identity and Access Management (IAM) enables you to enforce security policies like multi-factor authentication (MFA) for better security in your AWS environment.",
    multiSelect: false,
  },
  {
    question:
      "1. Which AWS service provides a fully managed NoSQL database service that offers single-digit millisecond performance at any scale?",
    options: [
      "A. Amazon RDS",
      "B. Amazon DynamoDB",
      "C. Amazon Redshift",
      "D. Amazon Aurora",
    ],
    answer: "B. Amazon DynamoDB",
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that offers fast and predictable performance with seamless scalability.",
    multiSelect: false,
  },
  {
    question:
      "2. A company needs to establish a dedicated network connection from its on-premises data center to AWS. Which service should the company use?",
    options: [
      "A. AWS VPN",
      "B. Amazon VPC Peering",
      "C. AWS Direct Connect",
      "D. AWS Transit Gateway",
    ],
    answer: "C. AWS Direct Connect",
    explanation:
      "AWS Direct Connect establishes a dedicated network connection between your on-premises data center and AWS, providing a more consistent and reliable connection.",
    multiSelect: false,
  },
  {
    question:
      "3. Which AWS service allows you to decouple components of your application so that they run independently, improving fault tolerance?",
    options: [
      "A. Amazon SQS",
      "B. Amazon SNS",
      "C. AWS Lambda",
      "D. Amazon RDS",
    ],
    answer: "A. Amazon SQS",
    explanation:
      "Amazon SQS (Simple Queue Service) allows you to decouple application components by using message queues, which increases fault tolerance and reliability.",
    multiSelect: false,
  },
  {
    question:
      "4. Which AWS service should be used to automate the deployment of containerized applications?",
    options: [
      "A. AWS CloudFormation",
      "B. Amazon Elastic Kubernetes Service (EKS)",
      "C. AWS Elastic Beanstalk",
      "D. Amazon Elastic Container Service (ECS)",
    ],
    answer: "D. Amazon Elastic Container Service (ECS)",
    explanation:
      "Amazon ECS is a fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications.",
    multiSelect: false,
  },
  {
    question:
      "5. What AWS service is best suited for analyzing real-time streaming data?",
    options: [
      "A. Amazon EMR",
      "B. Amazon Athena",
      "C. Amazon Kinesis Data Streams",
      "D. AWS Glue",
    ],
    answer: "C. Amazon Kinesis Data Streams",
    explanation:
      "Amazon Kinesis Data Streams allows you to collect, process, and analyze real-time, streaming data, enabling real-time analytics.",
    multiSelect: false,
  },
  {
    question:
      "6. Which AWS service allows you to manage encryption keys used to encrypt your data across AWS services?",
    options: [
      "A. AWS Secrets Manager",
      "B. AWS Key Management Service (KMS)",
      "C. AWS CloudHSM",
      "D. AWS Certificate Manager",
    ],
    answer: "B. AWS Key Management Service (KMS)",
    explanation:
      "AWS Key Management Service (KMS) allows you to create and control the encryption keys used to encrypt your data across AWS services.",
    multiSelect: false,
  },
  {
    question:
      "7. A company wants to centrally manage its cloud environment, including governance, compliance, and auditing. Which AWS service should they use?",
    options: [
      "A. AWS Config",
      "B. AWS CloudTrail",
      "C. AWS Control Tower",
      "D. AWS Organizations",
    ],
    answer: "C. AWS Control Tower",
    explanation:
      "AWS Control Tower provides a central point to manage multi-account environments with governance, compliance, and auditing capabilities.",
    multiSelect: false,
  },
  {
    question:
      "8. Which AWS service can be used to automatically detect security risks within your AWS environment by analyzing cloud resources?",
    options: [
      "A. AWS Macie",
      "B. AWS Shield",
      "C. Amazon GuardDuty",
      "D. AWS Security Hub",
    ],
    answer: "C. Amazon GuardDuty",
    explanation:
      "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior.",
    multiSelect: false,
  },
  {
    question:
      "9. Which AWS service helps you manage user identities and access to AWS resources securely?",
    options: [
      "A. Amazon Cognito",
      "B. AWS Identity and Access Management (IAM)",
      "C. AWS Directory Service",
      "D. AWS Secrets Manager",
    ],
    answer: "B. AWS Identity and Access Management (IAM)",
    explanation:
      "AWS Identity and Access Management (IAM) helps you securely manage user identities and control access to AWS resources.",
    multiSelect: false,
  },
  {
    question:
      "10. A company wants to encrypt data stored in Amazon S3 using their own encryption keys. Which AWS service should they use?",
    options: [
      "A. AWS Secrets Manager",
      "B. AWS Key Management Service (KMS)",
      "C. AWS CloudHSM",
      "D. AWS Shield",
    ],
    answer: "B. AWS Key Management Service (KMS)",
    explanation:
      "AWS KMS allows you to manage your own encryption keys, which can be used to encrypt data stored in Amazon S3.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service can automatically recover an Amazon EC2 instance if it becomes impaired?",
    options: [
      "A. Amazon EC2 Auto Scaling",
      "B. AWS Systems Manager",
      "C. AWS CloudFormation",
      "D. AWS Elastic Beanstalk",
    ],
    answer: "A. Amazon EC2 Auto Scaling",
    explanation:
      "Amazon EC2 Auto Scaling can automatically recover an Amazon EC2 instance if it becomes impaired by terminating the instance and launching a new one.",
    multiSelect: false,
  },
  {
    question:
      "A company wants to create a disaster recovery (DR) plan using AWS services. Which of the following services should be part of the DR plan? (Select TWO.)",
    options: [
      "A. AWS Backup",
      "B. Amazon Route 53",
      "C. AWS Lambda",
      "D. Amazon CloudWatch",
      "E. AWS X-Ray",
    ],
    answer: ["A. AWS Backup", "B. Amazon Route 53"],
    explanation:
      "AWS Backup can automate backup processes for disaster recovery, and Amazon Route 53 can route traffic to backup sites in case of an outage.",
    multiSelect: true,
  },
  {
    question:
      "Which AWS service provides the ability to host a relational database with automated backups, software patching, and automatic failover?",
    options: [
      "A. Amazon RDS",
      "B. Amazon DynamoDB",
      "C. AWS Glue",
      "D. Amazon Redshift",
    ],
    answer: "A. Amazon RDS",
    explanation:
      "Amazon RDS provides a fully managed relational database service with automated backups, software patching, and automatic failover.",
    multiSelect: false,
  },
  {
    question:
      "A company needs to secure its AWS account and enforce security best practices. Which AWS service or feature provides a central location to manage security policies across multiple AWS accounts?",
    options: [
      "A. AWS Organizations",
      "B. AWS IAM",
      "C. AWS Config",
      "D. AWS Trusted Advisor",
    ],
    answer: "A. AWS Organizations",
    explanation:
      "AWS Organizations enables you to centrally manage and enforce security policies across multiple AWS accounts.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service allows you to deploy and manage infrastructure as code using YAML or JSON templates?",
    options: [
      "A. AWS CloudFormation",
      "B. AWS OpsWorks",
      "C. AWS Elastic Beanstalk",
      "D. AWS CodeDeploy",
    ],
    answer: "A. AWS CloudFormation",
    explanation:
      "AWS CloudFormation allows you to define and deploy infrastructure as code using YAML or JSON templates.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service provides an easy-to-use feature that allows you to visually design and build your architecture diagrams using real-time data?",
    options: [
      "A. AWS CloudFormation",
      "B. AWS Architecture Center",
      "C. AWS Management Console",
      "D. AWS Perspective",
    ],
    answer: "D. AWS Perspective",
    explanation:
      "AWS Perspective provides a visualization of AWS Cloud workloads, enabling users to create architecture diagrams with real-time data from their AWS environment.",
    multiSelect: false,
  },
  {
    question:
      "A company needs to migrate a large amount of on-premises data to the AWS Cloud. Which AWS service should the company use for a fast and secure data transfer?",
    options: [
      "A. AWS Snowball",
      "B. Amazon S3 Transfer Acceleration",
      "C. AWS DataSync",
      "D. AWS Direct Connect",
    ],
    answer: "A. AWS Snowball",
    explanation:
      "AWS Snowball is a petabyte-scale data transport solution that uses secure physical devices to transfer large amounts of data into and out of AWS.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service allows for the deployment of machine learning models without needing to manage the underlying infrastructure?",
    options: [
      "A. AWS SageMaker",
      "B. AWS Lambda",
      "C. AWS Fargate",
      "D. Amazon EMR",
    ],
    answer: "A. AWS SageMaker",
    explanation:
      "AWS SageMaker provides a fully managed service that allows developers and data scientists to build, train, and deploy machine learning models without managing the infrastructure.",
    multiSelect: false,
  },
  {
    question:
      "A company is looking to enhance its VPC security by filtering incoming and outgoing traffic at the subnet level. Which AWS service should be used?",
    options: [
      "A. Network ACLs",
      "B. Security Groups",
      "C. AWS Shield",
      "D. AWS WAF",
    ],
    answer: "A. Network ACLs",
    explanation:
      "Network Access Control Lists (ACLs) provide an additional layer of security at the subnet level by controlling traffic in and out of one or more subnets.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service should a company use to manage and deploy Docker containers without the need to provision or manage the underlying compute resources?",
    options: [
      "A. AWS Fargate",
      "B. Amazon EC2",
      "C. Amazon ECS",
      "D. Amazon EKS",
    ],
    answer: "A. AWS Fargate",
    explanation:
      "AWS Fargate allows you to run containers without having to manage the underlying infrastructure, as it abstracts the compute layer from the user.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service helps optimize resource usage by recommending the right instance types based on historical usage patterns?",
    options: [
      "A. AWS Compute Optimizer",
      "B. AWS Trusted Advisor",
      "C. AWS Cost Explorer",
      "D. AWS Config",
    ],
    answer: "A. AWS Compute Optimizer",
    explanation:
      "AWS Compute Optimizer analyzes historical utilization metrics and makes recommendations for the best-suited instance types to improve performance and save costs.",
    multiSelect: false,
  },
  {
    question:
      "A company needs to centrally manage all compliance-related tasks, including auditing, monitoring, and risk assessment across their AWS accounts. Which AWS service should they use?",
    options: [
      "A. AWS Audit Manager",
      "B. AWS Security Hub",
      "C. AWS IAM",
      "D. AWS Organizations",
    ],
    answer: "A. AWS Audit Manager",
    explanation:
      "AWS Audit Manager helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations and industry standards.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service provides a scalable, managed message queue that allows decoupling of microservices, distributed systems, and serverless applications?",
    options: [
      "A. Amazon SNS",
      "B. Amazon SQS",
      "C. AWS Lambda",
      "D. Amazon MQ",
    ],
    answer: "B. Amazon SQS",
    explanation:
      "Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service can help a company track and analyze application performance in real-time by collecting and monitoring log data from AWS services and applications?",
    options: [
      "A. Amazon CloudWatch Logs",
      "B. AWS X-Ray",
      "C. AWS CloudTrail",
      "D. Amazon SNS",
    ],
    answer: "A. Amazon CloudWatch Logs",
    explanation:
      "Amazon CloudWatch Logs collects and monitors log data from AWS services and applications, allowing real-time analysis of application performance.",
    multiSelect: false,
  },
  {
    question:
      "A company wants to automate the creation, management, and deletion of snapshots for their Amazon EBS volumes. Which AWS service should they use?",
    options: [
      "A. AWS Backup",
      "B. Amazon Data Lifecycle Manager",
      "C. AWS CloudFormation",
      "D. AWS Auto Scaling",
    ],
    answer: "B. Amazon Data Lifecycle Manager",
    explanation:
      "Amazon Data Lifecycle Manager automates the creation, retention, and deletion of Amazon EBS snapshots, reducing the need for manual processes.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service provides managed databases for relational, key-value, document, in-memory, graph, time series, and ledger databases?",
    options: [
      "A. Amazon RDS",
      "B. Amazon Aurora",
      "C. Amazon DynamoDB",
      "D. Amazon Neptune",
    ],
    answer: "C. Amazon DynamoDB",
    explanation:
      "Amazon DynamoDB provides a managed NoSQL database that supports key-value and document data models. It's optimized for high-performance and low-latency requirements.",
    multiSelect: false,
  },
  {
    question:
      "A company needs to deploy an application in multiple AWS Regions for fault tolerance. Which AWS service should they use to manage and deploy the infrastructure as code across different regions?",
    options: [
      "A. AWS CloudFormation",
      "B. AWS Elastic Beanstalk",
      "C. AWS OpsWorks",
      "D. AWS CodeDeploy",
    ],
    answer: "A. AWS CloudFormation",
    explanation:
      "AWS CloudFormation allows users to model and set up their AWS resources so they can spend less time managing those resources and more time focusing on their applications. It's ideal for deploying infrastructure across multiple regions.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service helps in centrally managing billing and access across multiple AWS accounts under a single organization?",
    options: [
      "A. AWS Budgets",
      "B. AWS Cost Explorer",
      "C. AWS Organizations",
      "D. AWS Control Tower",
    ],
    answer: "C. AWS Organizations",
    explanation:
      "AWS Organizations offers policy-based management for multiple AWS accounts. By using organizations, you can create groups of accounts and then apply policies to those groups, simplifying the management of billing and access.",
    multiSelect: false,
  },
  {
    question:
      "A company needs to migrate its on-premises applications to the AWS cloud. They want to minimize the changes needed for the application migration. Which AWS service should they consider?",
    options: [
      "A. AWS Server Migration Service (SMS)",
      "B. AWS Snowball Edge",
      "C. AWS DataSync",
      "D. AWS Database Migration Service (DMS)",
    ],
    answer: "A. AWS Server Migration Service (SMS)",
    explanation:
      "AWS Server Migration Service (SMS) helps you migrate on-premises workloads to AWS, minimizing changes to your applications by enabling an automated, simplified process for server migrations.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service is designed to simplify running large-scale parallel and batch computing jobs, and automatically provisions the compute resources required?",
    options: [
      "A. AWS Batch",
      "B. AWS Lambda",
      "C. AWS Fargate",
      "D. Amazon ECS",
    ],
    answer: "A. AWS Batch",
    explanation:
      "AWS Batch enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. It dynamically provisions the optimal quantity and type of compute resources.",
    multiSelect: false,
  },
  {
    question:
      "A company needs to analyze data streams in real-time and detect anomalies. Which AWS service should they use?",
    options: [
      "A. Amazon Kinesis Data Streams",
      "B. AWS Glue",
      "C. Amazon QuickSight",
      "D. Amazon Redshift",
    ],
    answer: "A. Amazon Kinesis Data Streams",
    explanation:
      "Amazon Kinesis Data Streams allows you to build custom real-time applications that can continuously process or analyze streaming data. It's particularly useful for detecting anomalies in real-time data streams.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service provides a way to audit and evaluate the configurations of your AWS resources continuously to help ensure they comply with your desired configurations?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. AWS Trusted Advisor",
      "D. AWS Security Hub",
    ],
    answer: "B. AWS Config",
    explanation:
      "AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.",
    multiSelect: false,
  },
  {
    question:
      "A company is designing a multi-account AWS environment. Which AWS service should they use to establish a secure baseline with guardrails for their AWS accounts?",
    options: [
      "A. AWS Control Tower",
      "B. AWS Organizations",
      "C. AWS IAM",
      "D. AWS CloudFormation",
    ],
    answer: "A. AWS Control Tower",
    explanation:
      "AWS Control Tower automates the setup of a new multi-account AWS environment based on AWS best practices and provides guardrails to enforce compliance with policies.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service can be used to launch and manage a large number of virtual servers in a high-performance computing (HPC) environment?",
    options: [
      "A. AWS Batch",
      "B. AWS ParallelCluster",
      "C. Amazon EC2 Auto Scaling",
      "D. AWS Glue",
    ],
    answer: "B. AWS ParallelCluster",
    explanation:
      "AWS ParallelCluster is an open-source cluster management tool that makes it easy to deploy and manage High Performance Computing (HPC) clusters on AWS.",
    multiSelect: false,
  },
  {
    question:
      "A company wants to host a simple static website directly from an AWS service. Which service should they use to achieve this?",
    options: [
      "A. Amazon S3",
      "B. Amazon EC2",
      "C. Amazon Lightsail",
      "D. AWS Elastic Beanstalk",
    ],
    answer: "A. Amazon S3",
    explanation:
      "Amazon S3 can be used to host a simple static website. You can configure your S3 bucket as a static website and host your static content such as HTML, CSS, and images.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service allows you to create, manage, and deploy SSL/TLS certificates for use with AWS services?",
    options: [
      "A. AWS Certificate Manager",
      "B. AWS IAM",
      "C. Amazon Route 53",
      "D. AWS CloudHSM",
    ],
    answer: "A. AWS Certificate Manager",
    explanation:
      "AWS Certificate Manager (ACM) handles the complexity of creating and managing SSL/TLS certificates, allowing you to provision, manage, and deploy certificates for use with AWS services and your internal connected resources.",
    multiSelect: false,
  },
  {
    question:
      "A company needs to move petabytes of data from its on-premises data center to AWS. Which AWS service is best suited for this large-scale data transfer?",
    options: [
      "A. AWS Snowmobile",
      "B. AWS DataSync",
      "C. Amazon S3 Transfer Acceleration",
      "D. AWS Snowball",
    ],
    answer: "A. AWS Snowmobile",
    explanation:
      "AWS Snowmobile is an exabyte-scale data transfer service used to move large amounts of data (up to 100 PB) to AWS. It’s ideal for large-scale data migrations that would take too long over the internet.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service provides centralized logging and enables you to search, analyze, and visualize log data from AWS and on-premises resources?",
    options: [
      "A. Amazon CloudWatch Logs",
      "B. AWS CloudTrail",
      "C. Amazon Elasticsearch Service",
      "D. AWS X-Ray",
    ],
    answer: "C. Amazon Elasticsearch Service",
    explanation:
      "Amazon Elasticsearch Service allows you to deploy, secure, and operate Elasticsearch at scale with zero management overhead. It’s often used with Kibana to analyze, search, and visualize log data.",
    multiSelect: false,
  },
  {
    question:
      "A company wants to automatically monitor and adjust its resources for optimal performance and cost efficiency. Which AWS service should they use?",
    options: [
      "A. AWS Auto Scaling",
      "B. AWS Trusted Advisor",
      "C. AWS Compute Optimizer",
      "D. AWS CloudFormation",
    ],
    answer: "A. AWS Auto Scaling",
    explanation:
      "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service allows you to create isolated networks within the AWS Cloud, complete with your own IP address range, subnets, and routing?",
    options: [
      "A. Amazon VPC",
      "B. AWS Direct Connect",
      "C. AWS Transit Gateway",
      "D. AWS VPN",
    ],
    answer: "A. Amazon VPC",
    explanation:
      "Amazon Virtual Private Cloud (VPC) enables you to create isolated networks within the AWS Cloud, providing control over your IP address ranges, subnets, route tables, and network gateways.",
    multiSelect: false,
  },
  {
    question:
      "A company needs a scalable file storage solution that can be accessed concurrently from thousands of Amazon EC2 instances. Which AWS service should they use?",
    options: [
      "A. Amazon EFS",
      "B. Amazon S3",
      "C. Amazon FSx",
      "D. Amazon RDS",
    ],
    answer: "A. Amazon EFS",
    explanation:
      "Amazon Elastic File System (EFS) provides scalable file storage for use with Amazon EC2, allowing you to mount the same file system concurrently from multiple EC2 instances.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service offers a data warehouse solution that can analyze exabytes of data and run complex queries across data warehouses, operational databases, and data lakes?",
    options: [
      "A. Amazon Redshift",
      "B. Amazon RDS",
      "C. AWS Glue",
      "D. Amazon Athena",
    ],
    answer: "A. Amazon Redshift",
    explanation:
      "Amazon Redshift is a fully managed data warehouse service in the cloud that allows you to run complex queries against structured and semi-structured data, enabling you to analyze your data efficiently.",
    multiSelect: false,
  },
  {
    question:
      "A company wants to track and enforce compliance rules across its AWS resources. Which AWS service can help automate this process?",
    options: [
      "A. AWS Config",
      "B. AWS Trusted Advisor",
      "C. AWS Inspector",
      "D. AWS Shield",
    ],
    answer: "A. AWS Config",
    explanation:
      "AWS Config provides a detailed view of the configuration of AWS resources in your account, enabling you to automate compliance checks, assess risk, and troubleshoot issues.",
    multiSelect: false,
  },
  {
    question:
      "Which AWS service provides secure, resizable compute capacity in the cloud and supports a wide range of instance types for different workloads?",
    options: [
      "A. Amazon EC2",
      "B. AWS Lambda",
      "C. AWS Fargate",
      "D. Amazon ECS",
    ],
    answer: "A. Amazon EC2",
    explanation:
      "Amazon Elastic Compute Cloud (EC2) provides secure, resizable compute capacity in the cloud, and supports a wide range of instance types to accommodate various workloads and use cases.",
    multiSelect: false,
  },
  {
    question:
      "A company needs a fully managed service to extract, transform, and load (ETL) data for analytics. Which AWS service should they use?",
    options: [
      "A. AWS Glue",
      "B. Amazon Redshift",
      "C. Amazon Kinesis",
      "D. Amazon Athena",
    ],
    answer: "A. AWS Glue",
    explanation:
      "AWS Glue is a fully managed ETL service that makes it easy to prepare and load data for analytics, enabling you to categorize, clean, enrich, and move data between various data stores.",
    multiSelect: false,
  },
];
