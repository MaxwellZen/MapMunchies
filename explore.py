#! /usr/bin/python
print('Content-type: text/html\n')
import cgi, cgitb, re
cgitb.enable()
stuff = cgi.FieldStorage()
r = open("resources/restaurants.txt","r").read().strip().split("\n123456789987654321\n")
rc = open("resources/rcoords.txt","r").read().strip().split("\n123456789987654321\n")
for i in range(len(rc)):
    rc[i] = rc[i].split('\n')
s = open("resources/stories.txt","r").read().strip().split("\n123456789987654321\n")
s2 = []
#rest number name pfp message email
for i in range(1, len(s), 6):
    if i > len(s)-5:
        break
    s2 += [[int(s[i+3]),-int(s[i-1]),s[i+1],s[i],s[i+4],s[i+2]]]
s2.sort()
info = []
for i in range(len(r)):
    info += [[]]
for i in s2:
    info[i[0]].append([str(-1 * i[1])] + i[2:])

js = open("explore.js", "r").read()
js = "var info = " + str(info) + ';' + js[js.find('\n'):]


# html = open("explore.html","r").read()

marker = '''var marker = L.marker([/*x*/, /*y*/],{
        title: "Click me!",
        icon: myIcon,
    }).addTo(mymap)
    .bindPopup("<head><h1 class='restaurant' id = 'restaurant<!--r-->'> RESTAURANT </h1> <!--s--> <h3 <!--h--> class='name' id = 'name<!--r-->'> NAME </h3> </head> <body> <img src='PFP' class='pfp' id = 'pfp<!--r-->' <!--h-->><p class='message' id = 'message<!--r-->' <!--h-->> STORY </p> <button class='nxt' onclick = 'nxt(<!--r-->)' id='nxt<!--r-->' <!--h-->> Next Story <!--l--> </button> </body>")
    .openPopup
    '''
toadd = ""
for i in range(len(r)):
    copy = marker
    copy = copy.replace("/*x*/", rc[i][0])
    copy = copy.replace("/*y*/", rc[i][1])
    copy = copy.replace("<!--r-->", str(i))
    copy = copy.replace("RESTAURANT", r[i])
    if len(info[i])==0:
        copy = copy.replace("<!--h-->", "style='display: none;'")
        copy = copy.replace("<!--s-->", "<h3 class='nomessage'> No Stories </h3>")
    else:
        copy = copy.replace("<!--h-->", "")
        copy = copy.replace("<!--s-->", "")
        copy = copy.replace("NAME", info[i][0][1])
        copy = copy.replace("PFP", info[i][0][2])
        copy = copy.replace("STORY", info[i][0][3])
        copy = copy.replace("<!--l-->", "1/" + str(len(info[i])))
    toadd += copy
js = js.replace("/*markers*/", toadd)
html = open('explore.html','r').read()
html = html.replace("<!--script-->", "<script>" + js + "</script>")
print(html)
