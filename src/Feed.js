import { Create } from '@material-ui/icons';
import React from 'react';
import './Feed.css';
export default function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  )
}
