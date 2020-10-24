import React from "react";
import TaskMenu from "./view";
import { connect } from "unistore/react";
import actions from "@app/store/actions/task_actions";
export default connect(null, actions)(TaskMenu);
