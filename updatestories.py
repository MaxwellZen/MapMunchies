#! /usr/bin/python
print('Content-type: text/html\n')
import cgi, cgitb, re
import datetime
cgitb.enable()
stuff = cgi.FieldStorage()
x = datetime.datetime.now()
key = "\n123456789987654321\n"
f = open("resources/stories.txt").read().strip()
n = int(f[:f.find(key)])
for i in ["pfp", "name", "email", "restaurant", "message"][::-1]:
  f = stuff.getvalue(i) + key + f
f = str(n+1) + key + f
s = open("resources/stories.txt","w")
s.write(f)
s.close()
f = open("resources/dates.txt","r").read().strip()
f += key + x.strftime("%c")
s = open("resources/dates.txt","w")
s.write(f)
s.close()
print("<script>document.location='stories.py'</script>")
