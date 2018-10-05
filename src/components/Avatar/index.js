// @flow
import React from 'react';

type AvatarProps = {
  name: string,
  img?: string,
}

class Avatar extends React.PureComponent<AvatarProps> {
  render() {
    const { name } = this.props;
    
    return (
      <div className="avatar">
          <span className="initials">
            {this.getInitials(name)}
          </span>
        </div>
    )
  }

  getInitials(name: string): string {
    const names = name.split(' ');
    return (names[0][0] + names.reverse()[0][0]).toUpperCase();
  }
}

export default Avatar;