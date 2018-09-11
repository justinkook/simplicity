  const employeeList = [{
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
  ];
  const printOn = (e) => {
    e.preventDefault();
    emptify();
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').addClass('displayOn');
  };
  const verifyOn = (e) => {
    e.preventDefault();
    emptify();
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').addClass('displayOn');
  };
  const lookupOn = (e) => {
    e.preventDefault();
    emptify();
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').addClass('displayOn');
  };
  const addOn = (e) => {
    e.preventDefault();
    emptify();
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').addClass('displayOn');
  };
  const containsOn = (e) => {
    e.preventDefault();
    emptify();
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').addClass('displayOn');
  };
  const updateOn = (e) => {
    e.preventDefault();
    emptify();
    $('#deleteForm').removeClass('displayOn');
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').addClass('displayOn');
  };
  const deleteOn = (e) => {
    e.preventDefault()
    emptify();
    $('#printForm').removeClass('displayOn');
    $('#verifyForm').removeClass('displayOn');
    $('#lookupForm').removeClass('displayOn');
    $('#addForm').removeClass('displayOn');
    $('#containsForm').removeClass('displayOn');
    $('#updateForm').removeClass('displayOn');
    $('#deleteForm').addClass('displayOn');
  };

  //navigation bar turn off other classes and only turn on specified id
  $('.sidePrint').on('click', printOn);
  $('.sideVerify').on('click', verifyOn);
  $('.sideLookup').on('click', lookupOn);
  $('.sideAdd').on('click', addOn);
  $('.sideContains').on('click', containsOn);
  $('.sideUpdate').on('click', updateOn);
  $('.sideDelete').on('click', deleteOn);


  const emptify = () => {
    $('#listArea').empty();
  };

  const printify = (e) => {
    e.preventDefault();
    employeeList.forEach(e => {
      $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
      $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
      $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
    });
  };
  const verifying = (e) => {
    e.preventDefault();
    $('#listArea').text(employeeList.some(e => e.name === $('#inputVeri').val()));
  };

  const lookupfy = (e) => {
    e.preventDefault();
    let userInput = $('#inputLook').val();
    const filteredArr = employeeList.filter(e => e.name === userInput);
    filteredArr.forEach(e => {
      $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
      $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
      $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
    });
  };

  const containfy = (e) => {
    e.preventDefault();
    employeeList.filter(e => e.name.includes($('#inputCont').val())).forEach(e => {
      $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
      $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
      $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
    });
  };

  const updatefy = (e) => {
    e.preventDefault();
    let updateInput = $('#updateName').val();
    let updateField = $('#updateField').val();
    let updateValue = $('#updateValue').val();

    const filteredName = employeeList.filter(e => e.name === updateInput);
    switch (updateField) {
      case 'name':
        filteredName[0].name = updateValue
        break;

      case 'officeNum':
        filteredName[0].officeNum = updateValue
        break;

      case 'phoneNum':
        filteredName[0].phoneNum = updateValue
        break;
      default:
        $('#listArea').text('ERROR: Input field as name, officeNum, or phoneNum');
    }
    filteredName.forEach(e => {
      $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
      $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
      $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
    });
  };

  const addfy = (e) => {
    e.preventDefault();
    let addName = $('#addName').val();
    let addNum = $('#addNum').val();
    let addPhone = $('#addPhone').val();

    let addArr = [{
      name: addName,
      officeNum: addNum,
      phoneNum: addPhone
    }];
    let addedList = employeeList.concat(addArr);
    addedList.forEach(e => {
      $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
      $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
      $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
    });
  };

  const deletefy = (e) => {
    e.preventDefault();
    let deleteName = $('#deleteName').val();
    let index = employeeList.findIndex(e => e.name == deleteName);
    employeeList.splice(index, 1);
    employeeList.forEach(e => {
      $('#listArea').append(`<th>${'Name:'}</th><td>${e.name}</td>`);
      $('#listArea').append(`<th>${'OfficeNum:'}</th><td>${e.officeNum}</td>`);
      $('#listArea').append(`<th>${'PhoneNum:'}</th><td>${e.phoneNum}</td>`);
    });
  };

  //$('input[type=submit]').on('click', emptify);
  //on submit button with id click, runs callback function
  $('#print').on('click', printify);
  $('#verify').on('click', verifying);
  $('#lookup').on('click', lookupfy);
  $('#contains').on('click', containfy);
  $('#update').on('click', updatefy);
  $('#add').on('click', addfy);
  $('#delete').on('click', deletefy);