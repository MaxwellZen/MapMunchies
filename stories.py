#! /usr/bin/python
print('Content-type: text/html\n')
import cgi, cgitb, re
cgitb.enable()
rows = ""
f = open("resources/stories.txt","r").read().split('\n123456789987654321\n')
r = open("resources/restaurants.txt","r").read().split('\n123456789987654321\n')
for i in range(1, len(f), 6):
    if i > len(f)-5:
        break
    rows += "<tr><td><img style='max-width: 15vw; max-height: 15vh' src='" + f[i] + "'/></td><td><a href='profile.py?user=" + f[i+2] + "'>" + f[i+1] + "</a></td><td>" + r[int(f[i+3])] + "</td><td>" + f[i+4] + "</td></tr>"
s = open("stories.html",'r').read()
s = s.replace("<!--row-->", rows)
print(s)
