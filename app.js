const state = {
  employeeList: [{
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
  ],
};

const runDisplay = {
  printOn: () => {
    runCommand.emptify();
    $('.default').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').addClass('displayOn');
  },
  verifyOn: () => {
    runCommand.emptify();
    $('.default').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').addClass('displayOn');
  },
  lookupOn: () => {
    runCommand.emptify();
    $('.default').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').addClass('displayOn');
  },
  addOn: () => {
    runCommand.emptify();
    $('.default').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').addClass('displayOn');
  },
  containsOn: () => {
    runCommand.emptify();
    $('.default').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').addClass('displayOn');
  },
  updateOn: () => {
    runCommand.emptify();
    $('.default').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').addClass('displayOn');
  },
  deleteOn: () => {
    runCommand.emptify();
    $('.default').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').addClass('displayOn');
  },
  sideBarToggle: (e) => {
    e.preventDefault();
    $('#sidenav').toggleClass('active');
  },
};

const runCommand = {
  emptify: () => {
    $('#listArea').empty();
  },
  render: () => {
    state.employeeList.forEach(e => {
      $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
      $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
      $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
    });
  },
  printify: () => {
    runCommand.emptify();
    runCommand.render();
  },
  verifying: () => {
    runCommand.emptify();
    let ifInput = (state.employeeList.some(e => e.name === $('#inputVeri').val()));
    ifInput === true ? $('#listArea').text('Employee Found') : $('#listArea').text('Employee Not Found');
    $('#inputVeri').val(null)
  },
  lookupfy: () => {
    runCommand.emptify();
    let userInput = $('#inputLook').val();
    const filteredArr = state.employeeList.filter(e => e.name === userInput);
    state.employeeList = filteredArr;
    runCommand.render();
    $('#inputLook').val(null);
  },
  containfy: () => {
    runCommand.emptify();
    state.employeeList.filter(e => e.name.includes($('#inputCont').val()))
    runCommand.render();
    $('#inputCont').val(null);
  },
  updatefy: () => {
    runCommand.emptify();
    let updateInput = $('#updateName').val();
    let updateField = $('#updateField').val();
    let updateValue = $('#updateValue').val();

    let filteredList = state.employeeList.filter(e => e.name === updateInput);
    switch (updateField) {
      case 'name':
        filteredList[0].name = updateValue
        break;

      case 'officeNum':
        filteredList[0].officeNum = updateValue
        break;

      case 'phoneNum':
        filteredList[0].phoneNum = updateValue
        break;
      default:
        $('#listArea').text('Employee name not found or input field as name, officeNum, or phoneNum');
    };
    state.employeeList = filteredList;
    runCommand.render();
    $('#updateName').val(null);
    $('#updateField').val(null);
    $('#updateValue').val(null);
  },
  addfy: () => {
    runCommand.emptify();
    let addName = $('#addName').val();
    let addNum = $('#addNum').val();
    let addPhone = $('#addPhone').val();

    let addArr = [{
      name: addName,
      officeNum: addNum,
      phoneNum: addPhone
    }];
    let addedList = state.employeeList.concat(addArr);
    state.employeeList = addedList;
    runCommand.render();
  },
  deletefy: () => {
    runCommand.emptify();
    let deleteName = $('#deleteName').val();
    let foundName = state.employeeList.filter(e => e.name === deleteName);
    switch (deleteName) {
      case '':
        $('#listArea').text('Employee name not found');
        break;
      case foundName[0].name:
        let index = state.employeeList.findIndex(e => e.name === deleteName);
        state.employeeList.splice(index, 1);
        runCommand.render();
        break;
    };
    $('#deleteName').val(null);
  },
};
//IIFE of all my event listeners so it auto runs
const eventRun = (() => {
  //navigation bar turn off other classes and only turn on specified id
  $('.sidePrint').on('click', runDisplay.printOn);
  $('.sideVerify').on('click', runDisplay.verifyOn);
  $('.sideLookup').on('click', runDisplay.lookupOn);
  $('.sideAdd').on('click', runDisplay.addOn);
  $('.sideContains').on('click', runDisplay.containsOn);
  $('.sideUpdate').on('click', runDisplay.updateOn);
  $('.sideDelete').on('click', runDisplay.deleteOn);
  $('#sidebarCollapse').on('click', runDisplay.sideBarToggle);
  //$('input[type=submit]').on('click', emptify);
  //on submit button with id click, runs callback function
  $('#print').on('click', runCommand.printify);
  $('#verify').on('click', runCommand.verifying);
  $('#lookup').on('click', runCommand.lookupfy);
  $('#contains').on('click', runCommand.containfy);
  $('#update').on('click', runCommand.updatefy);
  $('#add').on('click', runCommand.addfy);
  $('#delete').on('click', runCommand.deletefy);
})();