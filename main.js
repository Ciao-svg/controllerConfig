function press_A() {
  key.control.simulate = {
    "key": "%%akey%%"
  }
  return 0;
}

function press_B() {
  key.control.simulate = {
    "key": "%%bkey%%"
  }
  return 0;
}

function press_X() {
  key.control.simulate = {
    "key": "%%xkey%%"
  }
  return 0;
}

function press_Y() {
  key.control.simulate = {
    "key": "%%ykey%%"
  }
  return 0;
}

if(keyDown.controller("A") and controllerConnected = true) {
  press_A();
}

if(keyDown.controller("B") and controllerConnected = true) {
  press_B();
}

if(keyDown.controller("X") and controllerConnected = true) {
  press_X();
}

if(keyDown("Y") and controllerConnected = true) {
  press_Y();
}
