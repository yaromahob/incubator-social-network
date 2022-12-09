import React, {ChangeEvent} from 'react';

type TProfileStatus = {
  status: string
  onEdit: boolean
  changeStatus: (e: ChangeEvent<HTMLInputElement>) => void
  editModeHandler: (onEdit: boolean) => void
}

const ProfileStatus: React.FC<TProfileStatus> = ({status, onEdit, editModeHandler, changeStatus}) => {
  
  const editHandler = () => {
    editModeHandler(!onEdit);
  };
  return (
    <div className="status">
      <h4>Status:</h4>
      {
        onEdit
          ? <input type="text"
                   value={status}
                   onChange={changeStatus}
                   onBlur={editHandler}
                   autoFocus
          />
          : <span onDoubleClick={editHandler}>{status}</span>
      }
    
    </div>
  );
};

export default ProfileStatus;
