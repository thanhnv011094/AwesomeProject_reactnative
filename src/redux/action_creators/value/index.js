import {ACTION_UP, ACTION_DOWN} from '../../../constants';

function up() {
  return {type: ACTION_UP};
}

function down() {
  return {type: ACTION_DOWN};
}

export {up, down};
