@ echo off
:Checkfolder
rem check to see if folder exists
IF EXIST "C:\WINDOWS\SHELLNEW" goto :main
goto :createfolder
:end

:createfolder
mkdir "C:\WINDOWS\SHELLNEW"
goto :main

:main
rem set html file location
set Htmlname=template.html
set filelocation= "C:\WINDOWS\SHELLNEW"
set Htmlloc= %filelocation%\%Htmlname% 
rem set Temp Reg file location
set regloc= %TEMP%\reg.reg

Rem create Html Doccument template
echo ^<html^>^<Head^>^<Title^> ^</Title^>> %Htmlloc%
echo. >> %Htmlloc%
echo ^</Head^>^<body^> >> %Htmlloc%
echo. >> %Htmlloc%
echo. >> %Htmlloc%
echo. >> %Htmlloc%
echo ^<br^> >> %Htmlloc%
echo ^<a href=""^> ^</a^> >> %Htmlloc%
echo ^<^!-- ^<img src=""^> --^> >> %Htmlloc%
echo. >> %Htmlloc%
echo. >> %Htmlloc%
echo. >> %Htmlloc%
echo. >> %Htmlloc%
echo ^</body^>^</html^> >> %Htmlloc%

rem create temp reg file
Echo REGEDIT4 > %regloc%
Echo. >> %regloc%
Echo [HKEY_CLASSES_ROOT\.html\ShellNew] >> %regloc%
Echo "FileName"="%Htmlname%" >> %regloc%
Echo. >> %regloc%
Echo [HKEY_CLASSES_ROOT\html] >> %regloc%
Echo ^@="htmlfile" >> %regloc%
Echo. >> %regloc%
Echo [HKEY_CLASSES_ROOT\html\DefaultIcon] >> %regloc%
Echo ^@="C:\Program Files\Internet Explorer\iexplore.exe,0" >> %regloc%
Echo. >> %regloc%
Echo [HKEY_CLASSES_ROOT\html\Shell] >> %regloc%
Echo. >> %regloc%
Echo [HKEY_CLASSES_ROOT\html\Shell\Open] >> %regloc%
Echo. >> %regloc%
Echo [HKEY_CLASSES_ROOT\html\Shell\Open\Command] >> %regloc%
Echo ^@="notepad.exe \"%%1\"" >> %regloc%

rem execute reg file then delete temp reg file.
REGEDIT /s %regloc%
del %regloc%

cls
Echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Echo    * Installed 
Echo    - You must restart for this to work
Echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
pause

:end