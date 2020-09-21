function createColumn(element, className, id = '') {
    var col = document.createElement(element)
    col.setAttribute('class', className)
    col.id = id
    return col;
}


var head = createColumn('div', 'head');
var headimageprofile = document.createElement('img');
headimageprofile.setAttribute('src', 'imge.jpg');
var headName = createColumn('div', 'name');
var headNameSpan = document.createElement('span');
headNameSpan.innerHTML = 'VAISHNAVI GODKE';
headName.appendChild(headNameSpan);
var headLayer = createColumn('div', 'layer');
head.append(headimageprofile, headName, headLayer);

document.body.append(head)
    // head done

var layer2 = createColumn('div', 'layer2')
var pstyle = createColumn('p', 'pstyle')
pstyle.innerHTML = ' Vaishnavi Godke | hyderabad | 500081 | 6309636292 | sonavyshu@gmail.com'

// layer2 done 

var content = createColumn('section', 'content');
var head1 = createColumn('div', 'head1');
var profile = createColumn('h1', 'profile');
var imgg = document.createElement('img');
// profile.innerHTML = 'Profile'
imgg.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/username.png')
profile.append(imgg, "Profile");
var cmn = createColumn('p', 'cmn');
cmn.innerHTML = ' Experienced Research analyst with knowledge on Trademark Fundamentals and introduction to product. Active understanding of the intellectual property (IP) industry and accurate market research'
var head2 = document.createElement('h1');
var img1 = document.createElement('img');
img1.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/transformation-skill.png')


// section done 
var cmn1 = createColumn('div', 'cmn');
var table = document.createElement('table');
var tr1 = document.createElement('tr');
var td1 = document.createElement('td');
var label1 = document.createElement('label');
label1.setAttribute('for', 'myRange1')
label1.innerHTML = 'HTML'
td1.appendChild(label1);
var td2 = document.createElement('td');
var input1 = document.createElement('input');
input1.setAttribute('type', 'range')
input1.setAttribute('min', '1')
input1.setAttribute('max', '100')
input1.setAttribute('value', '70')
input1.setAttribute('id', 'myRange1')
td2.appendChild(input1);
tr1.append(td1, td2)

var tr2 = document.createElement('tr');
var td3 = document.createElement('td');
var label2 = document.createElement('label');
label2.setAttribute('for', 'myRange2')
label2.innerHTML = 'CSS'
td3.appendChild(label2);
var td4 = document.createElement('td');
var input2 = document.createElement('input');
input2.setAttribute('type', 'range')
input2.setAttribute('min', '1')
input2.setAttribute('max', '100')
input2.setAttribute('value', '50')
input2.setAttribute('id', 'myRange2')
td4.appendChild(input2);
tr2.append(td3, td4)


var tr3 = document.createElement('tr');
var td5 = document.createElement('td');
var label3 = document.createElement('label');
label3.setAttribute('for', 'myRange3')
label3.innerHTML = 'DOCUMENTATION'
td5.appendChild(label3);
var td6 = document.createElement('td');
var input3 = document.createElement('input');
input3.setAttribute('type', 'range')
input3.setAttribute('min', '1')
input3.setAttribute('max', '100')
input3.setAttribute('value', '87')
input3.setAttribute('id', 'myRange3')
td6.appendChild(input3);
tr3.append(td5, td6)


var tr4 = document.createElement('tr');
var td7 = document.createElement('td');
var label4 = document.createElement('label');
label4.setAttribute('for', 'myRange4')
label4.innerHTML = 'RESEARCH ANALYSIS'
td7.appendChild(label4);
var td8 = document.createElement('td');
var input4 = document.createElement('input');
input4.setAttribute('type', 'range')
input4.setAttribute('min', '1')
input4.setAttribute('max', '100')
input4.setAttribute('value', '90')
input4.setAttribute('id', 'myRange4')
td8.appendChild(input4);
tr4.append(td7, td8)

table.append(tr1, tr2, tr3, tr4);
cmn1.appendChild(table);

// table ends here


var head3 = document.createElement('h1');
head3.innerHTML = 'Work Experience'
var img2 = document.createElement('img');
img2.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/business.png')
head3.appendChild(img2);
var head4 = document.createElement('h3');
head4.innerHTML = 'Research analyst (2019-2020)'
var ul_one = createColumn('ul', 'cmn')
var li_one = document.createElement('li');
li_one.innerHTML = ' Experience in trademark research for clients in various industries.'
var li_two = document.createElement('li');
li_two.innerHTML = 'Assisted in extracting data from clients and prepared information for input into databases'
var li_three = document.createElement('li');
li_three.innerHTML = 'Accuracy of data entry through proofreading trademark data editing Worked on applications and tools like OPSi, Citrix and AWS.'
ul_one.append(li_one, li_two, li_three);

// work1 done

var work2 = createColumn('div', 'work2');
var hwork1 = document.createElement('h1');
var h_img = document.createElement('img');
h_img.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/business.png')
hwork1.append(h_img, 'Work Experience');

var hwork2 = document.createElement('h3');
hwork2.innerHTML = 'Process Associate(2018-2019)'

var ul1 = createColumn('ul', 'cmn')
var li1 = document.createElement('li');
li1.innerHTML = 'Troubleshooting and fixing issues related to Project Fi and satisfying customer needs.'
var li2 = document.createElement('li');
li2.innerHTML = 'Providing information about products and services and helping with the complaints.'
ul1.append(li1, li2)

// education class
var educ = createColumn('div', 'edu');
var head5 = document.createElement('h1');
var img3 = document.createElement('img');
img3.setAttribute('src', 'https://img.icons8.com/ios-glyphs/60/000000/scholarship.png')
head5.append(img3, "EDUCATION")

var ul2 = document.createElement('ul');
var head6 = document.createElement('h3');
head6.innerHTML = 'Post-Graduation'
var li3 = createColumn('li', 'cmn');
li3.innerHTML = 'MBA in Finance'
var head7 = document.createElement('h3');
head7.innerHTML = 'Graduation'
var li4 = createColumn('li', 'cmn');
li4.innerHTML = 'Degree in BBA(Bachelor of Business Administration'
var head8 = document.createElement('h3');
head8.innerHTML = 'Intermediate'
var li5 = createColumn('li', 'cmn');
li5.innerHTML = 'Bi.P.C (Biology, Physics, Chemistry)'
ul2.append(head6, li3, head7, li4, head8, li5);
educ.append(head5, ul2);

work2.append(hwork1, hwork2, ul1, educ);

head2.append(img1, "SKILLS");
head1.append(profile, cmn, head2, cmn1, head3, head4, ul_one);
content.append(head1, work2);
layer2.append(pstyle, content);
document.body.append(layer2);