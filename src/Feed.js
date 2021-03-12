import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import React from 'react';
import './Feed.css';
import InputOption from './InputOption';

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#7085F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
        </div>
      </div>
    </div>
  )
}
