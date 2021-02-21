#! /usr/bin/python
print('Content-type: text/html\n')
import cgi, cgitb, re
cgitb.enable()
stuff = cgi.FieldStorage()
posts = ""
key = "\n123456789987654321\n"
f = open("resources/stories.txt","r").read().strip().split(key)
r = open("resources/restaurants.txt","r").read().strip().split(key)
d = open("resources/dates.txt","r").read().strip().split(key)
html = open("profile.html",'r').read()
email = stuff.getvalue("user")
name = ""
pfplink = ""
thelist = []
#["num", "pfp", "name", "email", "restaurant", "message"]
for i in range(1, len(f), 6):
    if i > len(f)-5:
        break
    if f[i+2] == email:
        name = f[i+1];
        pfplink = f[i];
        thelist += [f[i-1:i+5]]
html = html.replace("NAME", name)
html = html.replace("PFP", pfplink)
html = html.replace("EMAIL", email)
apost = '''<button type="button" class="collapsible">
            <h3>Post <!--i--> :&nbsp;&nbsp; RESTAURANT  </h3>
          </button>

          <div class="content">
            <p> <div class = "a">
              DATE <br>
              MESSAGE<br>
            </p> </div>
          </div>

          <br><br><br><br><br>'''
for j in range(len(thelist)):
    i = thelist[j]
    copy = apost
    copy = copy.replace("RESTAURANT", r[int(i[4])])
    copy = copy.replace("MESSAGE", i[5])
    copy = copy.replace("DATE", d[int(i[0])])
    copy = copy.replace("<!--i-->", str(len(thelist)-j))
    posts += copy
html = html.replace("PUTTHEPOSTSHERE", posts)
print(html)
