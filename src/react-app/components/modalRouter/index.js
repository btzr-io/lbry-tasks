import React from "react";
import ModalRouter from "@app/components/modalRouter/view";
import actions from "@app/store/actions/modal_actions";
import { connect } from "unistore/react";

export default connect(["modal"], actions)(ModalRouter);
