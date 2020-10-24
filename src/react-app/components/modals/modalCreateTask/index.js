import React from "react";
import ModalCreateTask from "./view.js";
import actions from "@app/store/actions/task_actions";
import { connect } from "unistore/react";

const view = () => <spam />;
export default connect(null, actions)(ModalCreateTask);
