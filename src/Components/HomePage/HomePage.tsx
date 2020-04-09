import * as React from 'react';
import '../HomePage/HomePage.css';

export interface IHomePageProps {
}

const url = "https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

export default class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div>
            <img alt="" className="main-pic" src={url}/>
      </div>
    );
  }
}
