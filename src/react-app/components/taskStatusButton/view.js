import React from "react";
import Icon from "@mdi/react";
import { Button } from "reakit/Button";
import { TASK_STATUS, TASK_STATUS_TYPES } from "@app/constants/types";

function TaskStatusButton({ id, status, startTask }) {
  const { icon, color } = TASK_STATUS_TYPES[status];
  const handleClick = () => {
    if (status === TASK_STATUS.INACTIVE) {
      startTask(id);
    }
  };
  return (
    <Button className="button button--status" onClick={handleClick}>
      <Icon
        path={icon}
        data-color={color}
        size={1}
        className={"status_icon"}
        spin={status === TASK_STATUS.RUNING && 0.64}
      />
    </Button>
  );
}

export default TaskStatusButton;
