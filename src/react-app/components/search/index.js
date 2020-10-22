import React from 'react';
import Search from './view';
import { connect } from 'unistore/react';
import actions from '@app/store/actions';


export default connect(['tasks', 'searchResults'], actions ) ( Search );
