import Modal from "@app/components/modal/view";
import { connect } from "unistore/react";
import actions from "@app/store/actions/modal_actions";
export default connect({}, actions)(Modal);
