import React, { Component } from 'react'

export class Comment extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
                <th>Delete</th>
            </tr>
            {comments.map(i=>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.body}</td>
                    <td><button className= 'delete-btn' onClick={()=> this.props.handleDelete(i.id)}>Delete</button></td>
                    </tr>
            )}
        
        </table>
      </div>
    )
  }
}

export default Comment
