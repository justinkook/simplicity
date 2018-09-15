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

  runDisplay: {

    clearDisplay: (sel) => {
      $('.default').removeClass('displayOn');
      $('#verifyForm').removeClass('displayOn');
      $('#lookupForm').removeClass('displayOn');
      $('#addForm').removeClass('displayOn');
      $('#containsForm').removeClass('displayOn');
      $('#updateForm').removeClass('displayOn');
      $('#deleteForm').removeClass('displayOn');
      $('#printForm').removeClass('displayOn');
      $(sel).addClass('displayOn');
    },
    printOn: () => {
      state.runCommand.emptify();
      state.runDisplay.clearDisplay('#printForm');
    },
    verifyOn: () => {
      state.runCommand.emptify();
      state.runDisplay.clearDisplay('#verifyForm');
    },
    lookupOn: () => {
      state.runCommand.emptify();
      state.runDisplay.clearDisplay('#lookupForm');
    },
    addOn: () => {
      state.runCommand.emptify();
      state.runDisplay.clearDisplay('#addForm');
    },
    containsOn: () => {
      state.runCommand.emptify();
      state.runDisplay.clearDisplay('#containsForm');
    },
    updateOn: () => {
      state.runCommand.emptify();
      state.runDisplay.clearDisplay('#updateForm');
    },
    deleteOn: () => {
      state.runCommand.emptify();
      state.runDisplay.clearDisplay('#deleteForm');
    },
    sideBarToggle: (e) => {
      e.preventDefault();
      $('#sidenav').toggleClass('active');
    },
  },

  runCommand: {
    emptify: () => {
      $('#listArea').empty();
    },
    render: (array) => {
      array.forEach(e => {
        $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
        $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
        $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
      });
    },
    printify: () => {
      state.runCommand.emptify(state.employeeList);
      state.runCommand.render(state.employeeList);
    },
    verifying: () => {
      state.runCommand.emptify();
      let ifInput = (state.employeeList.some(e => e.name === $('#inputVeri').val()));
      ifInput === true ? $('#listArea').text('Employee Found') : $('#listArea').text('Employee Not Found');
      $('#inputVeri').val(null)
    },
    lookupfy: () => {
      state.runCommand.emptify();
      let userInput = $('#inputLook').val();
      let filteredArr = state.employeeList.filter(e => e.name === userInput);
      state.runCommand.render(filteredArr);
      $('#inputLook').val(null);
    },
    containfy: () => {
      state.runCommand.emptify();
      let containList = state.employeeList.filter(e => e.name.includes($('#inputCont').val()))
      state.runCommand.render(containList);
      $('#inputCont').val(null);
    },
    updatefy: () => {
      state.runCommand.emptify();
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
      state.runCommand.render(filteredList);
      $('#updateName').val(null);
      $('#updateField').val(null);
      $('#updateValue').val(null);
    },
    addfy: () => {
      state.runCommand.emptify();
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
      state.runCommand.render(state.employeeList);
    },
    deletefy: () => {
      state.runCommand.emptify();
      let deleteName = $('#deleteName').val();
      let foundName = state.employeeList.filter(e => e.name === deleteName);
      switch (deleteName) {
        case '':
          $('#listArea').text('Employee name not found');
          break;
        case foundName[0].name:
          let index = state.employeeList.findIndex(e => e.name === deleteName);
          state.employeeList.splice(index, 1);
          state.runCommand.render(state.employeeList);
          break;
      };
      $('#deleteName').val(null);
    },
  },
};

//navigation bar turn off other classes and only turn on specified id
$('.sidePrint').on('click', state.runDisplay.printOn);
$('.sideVerify').on('click', state.runDisplay.verifyOn);
$('.sideLookup').on('click', state.runDisplay.lookupOn);
$('.sideAdd').on('click', state.runDisplay.addOn);
$('.sideContains').on('click', state.runDisplay.containsOn);
$('.sideUpdate').on('click', state.runDisplay.updateOn);
$('.sideDelete').on('click', state.runDisplay.deleteOn);
$('#sidebarCollapse').on('click', state.runDisplay.sideBarToggle);
//$('input[type=submit]').on('click', emptify);
//on submit button with id click, runs callback function
$('#print').on('click', state.runCommand.printify);
$('#verify').on('click', state.runCommand.verifying);
$('#lookup').on('click', state.runCommand.lookupfy);
$('#contains').on('click', state.runCommand.containfy);
$('#update').on('click', state.runCommand.updatefy);
$('#add').on('click', state.runCommand.addfy);
$('#delete').on('click', state.runCommand.deletefy);