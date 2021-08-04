// Get the ids associated with links (e.g. <a id="people">People</a>)
// and then assign them to a variable
try {
	document.getElementById('announcements').href = "https://www.learn.ed.ac.uk/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_87184_1&handle=cp_announcements&mode=cpview";
} catch { };	// link to annoucements page
try {document.getElementById('drps').href = "http://www.drps.ed.ac.uk/21-22/dpt/cxmath08077.htm";} catch { };	// link to the official drps course page
try {document.getElementById('help').href = "/help";} catch { };	// link to the help page
try {document.getElementById('ids2020').href = "https://example.com";} catch { };	// link to ids 2020 page
try {document.getElementById('ids2019').href = "https://introds-2019.netlify.app/";} catch { };	// link to ids 2019 page
try {document.getElementById('learn').href = "https://www.learn.ed.ac.uk/";} catch { };	// link to learn
try {document.getElementById('learnids').href = "https://www.learn.ed.ac.uk/webapps/blackboard/content/listContentEditable.jsp?content_id=_6018051_1&course_id=_87184_1&mode=reset";} catch { };	// link to the IDS course on learn
try {document.getElementById('people').href = "/people";} catch { };	// link to the people page
try {document.getElementById('policies').href = "/policies";} catch { };	// link to the policies page
try {document.getElementById('resources').href = "/resources";} catch { };	// link to the resources page
try {document.getElementById('survey1').href = "https://www.example.com";} catch { };	// link to the "Getting to know you survey"
try {document.getElementById('tags').href = "/tags";} catch { };	// link to the tags page
try {document.getElementById('troubleshoot').href = "/troubleshoot";} catch { };	// link to the troubleshoot page
try {document.getElementById('ytplaylist').href = "https://youtube.com/playlist?list=PLPpngierSrQQXWJYxcejlR-DI2YSp0gD2";} catch {console.log('no ytplaylist id present')};	// link to the youtube playlist

try {document.getElementById("mhplaylist").href = "https://media.ed.ac.uk/playlist/dedicated/1_p6bmjbvr/";} catch {console.log('no mhplaylist id present')};	// link to the official drps course page
console.log('Links Added');
