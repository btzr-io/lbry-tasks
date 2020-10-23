import CreationMenu from "@app/components/creationMenu/view";
import { connect } from "unistore/react";
import actions from "@app/store/actions/modal_actions";
export default connect({}, actions)(CreationMenu);
