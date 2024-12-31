// Import your SVGs as React components
import NestjsIcon from '../Assets/SkillsSvgs/Nest.js.svg?raw';
import NodejsIcon from '../Assets/SkillsSvgs/Node.js.svg?raw';
import PostgresIcon from '../Assets/SkillsSvgs/PostgresSQL.svg?raw';
import ExpressJSIcon from '../Assets/SkillsSvgs/Express.svg?raw';
import MySQLIcon from '../Assets/SkillsSvgs/MySQL.svg?raw';
import MongoDBIcon from '../Assets/SkillsSvgs/MongoDB.svg?raw';
import ReactIcon from '../Assets/SkillsSvgs/React.svg?raw';
import NextJSIcon from '../Assets/SkillsSvgs/Next.js.svg?raw';
import ReduxIcon from '../Assets/SkillsSvgs/Redux.svg?raw';
import MuiIcon from '../Assets/SkillsSvgs/mui.svg?raw';
import AWSIcon from '../Assets/SkillsSvgs/AWS.svg?raw';
import DockerIcon from '../Assets/SkillsSvgs/Docker.svg?raw';


export type SkillName = "nestjs" | "nodejs" | "postgresql" | "expressjs" | "mysql" | "mongodb" | "react" | "nextjs" | "redux" | "mui" | "aws" | "docker";

const icons = {
  nestjs: <div dangerouslySetInnerHTML={{ __html: NestjsIcon }} className="w-10 h-10" />,
  nodejs: <div dangerouslySetInnerHTML={{ __html: NodejsIcon }} className="w-10 h-10" />,
  postgresql: <div dangerouslySetInnerHTML={{ __html: PostgresIcon }} className="w-10 h-10" />,
  expressjs: <div dangerouslySetInnerHTML={{ __html: ExpressJSIcon }} className="w-10 h-10" />,
  mysql: <div dangerouslySetInnerHTML={{ __html: MySQLIcon }} className="w-10 h-10" />,
  mongodb: <div dangerouslySetInnerHTML={{ __html: MongoDBIcon }} className="w-10 h-10" />,
  react: <div dangerouslySetInnerHTML={{ __html: ReactIcon }} className="w-10 h-10" />,
  nextjs: <div dangerouslySetInnerHTML={{ __html: NextJSIcon }} className="w-10 h-10" />,
  redux: <div dangerouslySetInnerHTML={{ __html: ReduxIcon }} className="w-10 h-10" />,
  mui: <div dangerouslySetInnerHTML={{ __html: MuiIcon }} className="w-10 h-10" />,
  aws: <div dangerouslySetInnerHTML={{ __html: AWSIcon }} className="w-10 h-10" />,
  docker: <div dangerouslySetInnerHTML={{ __html: DockerIcon }} className="w-10 h-10" />,
};



// getIcon function
export const getIcon = (name: SkillName) => icons[name];

// React component to display the icon
const IconComponent = ({ skill }: { skill: SkillName }) => {
  return (
    <div>
      {getIcon(skill)}
    </div>
  );
};

export default IconComponent;

