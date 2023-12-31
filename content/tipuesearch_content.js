var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n https://github.com/41223141/cp2023 \xa0(個人倉儲連結) \n https://github.com/41223136/cp2023_ag2 \xa0(課堂小組連結-第二組) \n', 'tags': '', 'url': 'About.html'}, {'title': '課程主題', 'text': '', 'tags': '', 'url': '課程主題.html'}, {'title': 'w13-1', 'text': '利用c語言,採數值分析法解微分方程式並分析結果,以gnuplot繪出png圖檔 \n 因為c程式其跨硬體的可攜性優勢而經常被業界使用在機電自動控制領域 \n', 'tags': '', 'url': 'w13-1.html'}, {'title': 'w12-1', 'text': '說明如何在replit,s.cycu.org與windows中執行c程式 \n 說明如何在windows共用 s.cycu.org 上的 id_rsa 私鑰,轉為.ppk 之後,可以再結合.gitconfig中的http.proxy 設定, 以SSH加上 https取下個人或分組倉儲後,在windows啟動編輯改版後推至 github \n', 'tags': '', 'url': 'w12-1.html'}, {'title': 'w11', 'text': '線上簡報、網誌與多媒體影片製作工具: \n Leo Editor \xa0 ( 討論群組 ) 為大綱管理系統, 可以當作程式開發的 IDE (Integrated Development Environment) 使用, 可用來編輯 reveal.js 簡報檔案中的 html 與 markdown, 也可用來編輯 Pelican 網誌 markdown 與轉檔, 並且在電腦輔助設計與分析過程中, 可以用來解讀 CoppeliaSim XML 格式檔案. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n Wink \xa0 為操作流程影片製作套件, 可以在電腦操作過程, 儲存關鍵頁面與滑鼠點擊區域後, 加上輔助文字說明後製作成 mp4 影片檔. \n ShareX \xa0 為螢幕畫面取像或錄影套件, 可以擷取電腦畫面任一區域存為影像檔, 或者結合語音說明與滑鼠操作錄製說明影片. \n OBS \xa0 為電腦廣播製作系統, 可以結合各種語音、圖像與影片製作出多元的電腦操作說明影片. \n Wink 與 ShareX 都需要 \xa0 ffmpeq.exe . \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w10', 'text': '各組必須在分組網站,利用組員分工學習的方式,將計算機程式的教學內容及作業進行整理且各組員所分配到的工作必須先在個人網站中整理後,再放入各分組網站中 \n 如何快速利用隨身碟設定網路並且使用IPV6,目的是為了啟動隨身系統之後可以透過 rsa private key 以 SSH 取下個人倉儲,並能啟動編輯後轉檔,擁有推送回 github 的能力 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w9', 'text': '\n read_last_final1.程式碼: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n \n \n \n #include <stdio.h> \n #include <string.h> \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 // Open the user file for reading \n \xa0\xa0\xa0\xa0 FILE * user_file =  fopen ( "2b_user_list.txt" ,  "r" ); \n \xa0\xa0\xa0\xa0 if   (user_file == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 perror ( "Error opening user file" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 char   line[100];  // Assuming a maximum line length of 100 characters \n \xa0 \n \xa0\xa0\xa0\xa0 char   valid_users[100][20];  // Assuming a maximum of 100 valid users with a length of 20 characters each \n \xa0\xa0\xa0\xa0 int   valid_user_count = 0; \n \xa0 \n \xa0\xa0\xa0\xa0 // Read and store the student numbers from the user file \n \xa0\xa0\xa0\xa0 while   ( fgets (line,  sizeof (line), user_file)) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 line[ strcspn (line,  "\\n" )] =  \'\\0\' ;  // Remove the newline character \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 strcpy (valid_users[valid_user_count], line); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 valid_user_count++; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // Close the user file \n \xa0\xa0\xa0\xa0 fclose (user_file); \n \xa0 \n \xa0\xa0\xa0\xa0 // Open the CAD file for reading \n \xa0\xa0\xa0\xa0 FILE * cad_file =  fopen ( "cad2023_2b_w8.txt" ,  "r" ); \n \xa0\xa0\xa0\xa0 if   (cad_file == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 perror ( "Error opening CAD file" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 char   unique_users[100][20];  // Assuming a maximum of 100 unique users with a length of 20 characters each \n \xa0\xa0\xa0\xa0 int   unique_user_count = 0; \n \xa0 \n \xa0\xa0\xa0\xa0 // Read the CAD file line by line \n \xa0\xa0\xa0\xa0 while   ( fgets (line,  sizeof (line), cad_file)) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 char * token =  strtok (line,  " " );  // Split the line by space \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (token != NULL &&  strstr (token,  "cad" ) == token) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // Extract the student number (skip "cad") \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 char   student_number[20];  // Assuming a maximum length of 20 characters for a student number \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 strcpy (student_number, token + 3);  // Skip "cad" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // Check if the student number is in the list of valid users and not a duplicate \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   is_valid = 0; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   ( int   i = 0; i < valid_user_count; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   ( strcmp (valid_users[i], student_number) == 0) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 is_valid = 1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 break ; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // Add the student number to the unique_users list if it\'s valid and not a duplicate \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (is_valid) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   is_duplicate = 0; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   ( int   i = 0; i < unique_user_count; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   ( strcmp (unique_users[i], student_number) == 0) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 is_duplicate = 1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 break ; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (!is_duplicate) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 strcpy (unique_users[unique_user_count], student_number); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 unique_user_count++; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // Reverse the order of the unique student numbers \n \xa0\xa0\xa0\xa0 for   ( int   i = 0; i < unique_user_count / 2; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 char   temp[20]; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 strcpy (temp, unique_users[i]); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 strcpy (unique_users[i], unique_users[unique_user_count - 1 - i]); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 strcpy (unique_users[unique_user_count - 1 - i], temp); \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // Print the unique student numbers in reverse order \n \xa0\xa0\xa0\xa0 for   ( int   i = 0; i < unique_user_count; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 printf ( "%s\\n" , unique_users[i]); \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // Close the CAD file \n \xa0\xa0\xa0\xa0 fclose (cad_file); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n \n \n \n \n 若採用 Python 編寫: \n read_last.py 原始碼 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n \n \n \n # 讀取學號檔案 \n with  open ( "2b_user_list.txt" ,  \'r\' ) as user_file: \n \xa0\xa0\xa0\xa0 user_lines  =   user_file.read().splitlines() \n \xa0 \xa0 \n # 讀取 last 指令轉出的檔案, 以 last -w > cad2023_2b_w8.txt 建立檔案 \n with  open ( "cad2023_2b_w8.txt" ,  \'r\' ) as cad_file: \n \xa0\xa0\xa0\xa0 # 以下是利用跳行符號, 將每一行區隔成數列 \n \xa0\xa0\xa0\xa0 cad_lines  =   cad_file.read().splitlines() \n #print(cad_lines) \n \xa0 \xa0 \n # 從 cad_lines 建立所有登入使用者數列 \n login_users  =   [] \n for   i  in   cad_lines: \n \xa0\xa0\xa0\xa0 line_list  =   i.split( " " ) \n \xa0\xa0\xa0\xa0 login_users.append(line_list[ 0 ]) \n #print(login_users) \n \xa0 \xa0 \n # 根據 https://stackoverflow.com/questions/480214/how-do-i-remove-duplicates-from-a-list-while-preserving-order \n # 數列去除重複元素但仍保持原始次序 \n login_users  =   list ( dict .fromkeys(login_users)) \n #print(login_users) \n \xa0 \xa0 \n # 建立數列存放符合條件的使用者 \n valid_users  =   [] \n \xa0 \xa0 \n # 取出符合條件的使用者 \n for   line  in   login_users: \n \xa0\xa0\xa0\xa0 if   "cad"   in   line: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # 將 cad 字串去除 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 user_number  =   line.replace( "cad" , "") \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   user_number  in   user_lines: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 valid_users.append(user_number) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n # 利用 reverse() 將 valid_users 反向排序 \n valid_users.reverse() \n \xa0 \xa0 \n # , 最早登入者列在最前面 \n for   user  in   valid_users: \n \xa0\xa0\xa0\xa0 print (user) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w8', 'text': '在 Ubuntu 安裝 gd 程式庫套件: \n sudo apt update \n sudo apt upgrade \n sudo apt install libgd-dev \n cd downloads \n cc gd_ex1.c -lm -lgd \n ./a.out \n 在 Ubuntu 安裝 gnuplot 套: \n sudo apt install gnuplot \n 因為 s1511 伺服器並沒有安裝 X11, 因此 raylib 相關範例只能在近端可攜環境中執行 \n 利用c程式結合gd繪圖程式庫畫出中國/英國/日本國旗/南韓國旗 \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w7', 'text': '說明如何建立各組之網站說明,將協同網站設定成協同者後,import後進入replit \n 如何繪製出最基本的gd繪圖 \n 利用已知的ansi c 程式並結合gd的繪圖程式繪製出台灣的國旗 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w6-1', 'text': '說明如何設定IPV6並介紹與IPV4的差別 \n IPV6位址 2001:288:6004:17:2023 \n 利用C語言繪製出各國國旗 \n', 'tags': '', 'url': 'w6-1.html'}, {'title': 'w5-1', 'text': '在replit上啟動cp2023並且編輯網站,然後推至github \n 同時登入replit及github的情況下,將replit與github連動 \n 使用import將個人倉儲cp2023導入replit中, 設定 replit 為 python3 main.py \n 使用run執行 main.py 啟動倉儲內容編輯網頁 \n 將產生的新密碼存入config變數之中,重新啟動倉儲之後將c onvert 為靜態內容後, 在 git 頁面中將改版內容推至 github \n', 'tags': '', 'url': 'w5-1.html'}, {'title': 'w4', 'text': '建立課堂之線上考試程式之帳號,利用one drive中的teams內容來建立 \n 創建個人課堂中的評分倉儲cp2023,並設定github pages \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w3', 'text': '說明如何個人github-site帳號以及倉儲之設定 \n 因無法使用github classroom \n 所以利用ssh-keygen的方式來擁有權限的github倉儲 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w2', 'text': '說明如何設定網路,並檢驗有無設定成功 \n 教導如何利用replit編輯自己的個人網站 \n 教導如何利用replit連動至github \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w1', 'text': '創建Github帳號 \n 創建Replit帳號 \n 創建onedrive帳號(利用學校給的校務帳號與密碼,使用mail2000) \n', 'tags': '', 'url': 'w1.html'}, {'title': '作業內容', 'text': '', 'tags': '', 'url': '作業內容.html'}, {'title': 'w5-2', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'w5-2.html'}, {'title': 'w6-2', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n}\n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n\n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n}\n \n \n \n', 'tags': '', 'url': 'w6-2.html'}, {'title': 'w12-2', 'text': '#include <stdio.h>\n\nint main()\n{\n\nprintf("hello world\\n");\n} \n 貼上程式碼後在shell地方輸入 cd downloads 再cc hello.c接著再./a.out就完成了! \n     #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("./../images/hellogd.png", "wb");\n    if (outputFile == NULL) {\n\nfprintf(stderr, "Error opening the output file.\\n");\n\nreturn 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    // 長方形塗色\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n    // 橢圓形塗色\n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n    // 橢圓形畫線\n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n    // 畫直線\n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n\n    // 多邊形畫線\n    gdPoint points[4];\n    points[0].x = (int)width/4;\n    points[0].y = (int)height*3/4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n    gdImagePolygon(img, points, 4, black);\n\n    // 多邊形塗色\n    gdPoint points2[4];\n    points2[0].x = (int)width/3;\n    points2[0].y = (int)height/2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n \n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n \n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n \nint main() {\n    int width = 800;\n    int height = 600;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    FILE *outputFile = fopen("./../images/hellogd2.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n \n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n \n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n \n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n \n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 4; i++) {\n        rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 30.0, points, 4);\n        gdImagePolygon(img, points, 4, black);\n    }\n \n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 12; i++) {\n        //rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n        rotateFilledPolygon(500, 200, 30.0, points2, 4);\n        gdImageFilledPolygon(img, points2, 4, red);\n    }\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n \n    return 0;\n}\n \n \n', 'tags': '', 'url': 'w12-2.html'}, {'title': 'w13-2', 'text': '我覺得計算機程式這門課我收穫了許多,在學之前我只會連wifi,現在除了可以用proxy上網以外也可以從控制台裡面設定IPV6/IPV4,也了解原來隨身碟是如此的方便,只是每次還要從檔案管理中打開副檔名才可使用覺得偏瑣碎了一些,希望在剩下的五個禮拜我可以學到更多的技巧 \n', 'tags': '', 'url': 'w13-2.html'}, {'title': '國旗練習', 'text': '', 'tags': '', 'url': '國旗練習.html'}, {'title': 'ITALI', 'text': '\n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n \n \n \n #include <stdio.h> \n #include <gd.h> \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   width = 300;\xa0  // 宽度 \n \xa0\xa0\xa0\xa0 int   height = 200;  // 高度 \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr image = gdImageCreateTrueColor(width, height); \n \xa0 \n \xa0\xa0\xa0\xa0 if   (image == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 printf ( "Failed to create image.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // 确定颜色索引 \n \xa0\xa0\xa0\xa0 int   green = gdImageColorAllocate(image, 0, 128, 0); \n \xa0\xa0\xa0\xa0 int   white = gdImageColorAllocate(image, 255, 255, 255); \n \xa0\xa0\xa0\xa0 int   red = gdImageColorAllocate(image, 255, 0, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 // 填充颜色 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(image, 0, 0, width / 3, height, green); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(image, width / 3, 0, (width / 3) * 2, height, white); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(image, (width / 3) * 2, 0, width, height, red); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE   *outputFile; \n \xa0\xa0\xa0\xa0 outputFile =  fopen ( "./../images/italian_flag.png" ,  "wb" ); \n \xa0 \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 printf ( "Failed to open file for writing.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePng(image, outputFile); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageDestroy(image); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'ITALI.html'}, {'title': 'ROC', 'text': '\n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n 98 \n 99 \n 100 \n 101 \n 102 \n 103 \n 104 \n 105 \n 106 \n 107 \n 108 \n 109 \n 110 \n 111 \n 112 \n 113 \n 114 \n 115 \n 116 \n 117 \n 118 \n 119 \n 120 \n 121 \n 122 \n \n \n \n // https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China \n // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621 \n // cc roc_flag_in_gd.c -lgd -lm to link with gd and math library \n // https://www.rapidtables.com/web/color/RGB_Color.html \n // 幾何形狀著色與繪圖練習 \n // 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖 \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void   draw_roc_flag(gdImagePtr img); \n void   draw_white_sun(gdImagePtr img,  int   x,  int   y,  int   size,  int   color); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 // width 3: height 2 \n \xa0\xa0\xa0\xa0 int   width = 1200; \n \xa0\xa0\xa0\xa0 // 國旗長寬比為 3:2 \n \xa0\xa0\xa0\xa0 int   height = ( int )(width*2.0 / 3.0); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_roc_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "./../images/roc_flag_in_gd.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Error opening the output file.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \n void   draw_roc_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處 \n \xa0\xa0\xa0\xa0 int   center_x = ( int )(width/4); \n \xa0\xa0\xa0\xa0 int   center_y = ( int )(height/4); \n \xa0\xa0\xa0\xa0 // gdImageFilledEllipse 需以長寬方向的 diameter 作圖 \n \xa0\xa0\xa0\xa0 // 由於中央白日圓形的半徑為青天寬度的 1/8 \n \xa0\xa0\xa0\xa0 // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8 \n \xa0\xa0\xa0\xa0 // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8 \n \xa0\xa0\xa0\xa0 int   sun_radius = ( int )(width/8); \n \xa0\xa0\xa0\xa0 // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑 \n \xa0\xa0\xa0\xa0 int   white_circle_dia = sun_radius; \n \xa0\xa0\xa0\xa0 // 中央藍色圓形半徑為中央白日的 1又 2/15 \n \xa0\xa0\xa0\xa0 int   blue_circle_dia = white_circle_dia +\xa0 white_circle_dia*2/15; \n \xa0\xa0\xa0\xa0 // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值 \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 255, 0, 0);  // 紅色 \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255);  // 白色 \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 0, 0, 149);  // 藍色 \n \xa0\xa0\xa0\xa0 // 根據畫布大小塗上紅色長方形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, red); \n \xa0\xa0\xa0\xa0 // 青天面積為整面國旗的 1/4, 也是採用長方形塗色 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, ( int )(width/2.0), ( int )(height/2.0), blue); \n \xa0\xa0\xa0\xa0 // 先設法以填色畫出六個白色堆疊菱形 \n \xa0\xa0\xa0\xa0 draw_white_sun(img, center_x, center_y, sun_radius, white); \n \xa0\xa0\xa0\xa0 // 利用一個藍色大圓與白色小圓畫出藍色環狀 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue); \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white); \n \xa0 \n } \n \xa0 \n void   draw_white_sun(gdImagePtr img,  int   center_x,  int   center_y,  int   sun_radius,  int   color) { \n \xa0\xa0\xa0\xa0 // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位 \n \xa0\xa0\xa0\xa0 // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度 \n \xa0\xa0\xa0\xa0 float   deg = M_PI/180; \n \xa0\xa0\xa0\xa0 // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度 \n \xa0\xa0\xa0\xa0 // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小 \n \xa0\xa0\xa0\xa0 float   sr = sun_radius/ tan (75*deg); \n \xa0\xa0\xa0\xa0 int   ax, ay, bx, by, dx, dy, ex, ey; \n \xa0\xa0\xa0\xa0 gdPoint points[4]; \n \xa0\xa0\xa0\xa0 /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確 \n \xa0\xa0\xa0\xa0 ax = center_x; \n \xa0\xa0\xa0\xa0 ay = center_y - sun_radius; \n \xa0\xa0\xa0\xa0 bx = center_x - sun_radius*tan(15*deg); \n \xa0\xa0\xa0\xa0 by = center_y; \n \xa0\xa0\xa0\xa0 ex = center_x; \n \xa0\xa0\xa0\xa0 ey = center_y + sun_radius; \n \xa0\xa0\xa0\xa0 dx = center_x + sun_radius*tan(15*deg); \n \xa0\xa0\xa0\xa0 dy = center_y; \n \xa0\xa0\xa0\xa0 // AB \n \xa0\xa0\xa0\xa0 gdImageLine(img, ax, ay, bx, by, color); \n \xa0\xa0\xa0\xa0 // BE \n \xa0\xa0\xa0\xa0 gdImageLine(img, bx, by, ex, ey, color); \n \xa0\xa0\xa0\xa0 // ED \n \xa0\xa0\xa0\xa0 gdImageLine(img, ex, ey, dx, dy, color); \n \xa0\xa0\xa0\xa0 // DA \n \xa0\xa0\xa0\xa0 gdImageLine(img, dx, dy, ax, ay, color); \n \xa0\xa0\xa0\xa0 */ \n \xa0\xa0\xa0\xa0 ax = center_x; \n \xa0\xa0\xa0\xa0 ay = center_y - sun_radius; \n \xa0\xa0\xa0\xa0 bx = center_x - sun_radius* tan (15*deg); \n \xa0\xa0\xa0\xa0 by = center_y; \n \xa0\xa0\xa0\xa0 ex = center_x; \n \xa0\xa0\xa0\xa0 ey = center_y + sun_radius; \n \xa0\xa0\xa0\xa0 dx = center_x + sun_radius* tan (15*deg); \n \xa0\xa0\xa0\xa0 dy = center_y; \n \xa0\xa0\xa0\xa0 // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域 \n \xa0\xa0\xa0\xa0 for   ( int   i=1;i<=6;i++){ \n \xa0\xa0\xa0\xa0 // A \n \xa0\xa0\xa0\xa0 points[0].x = ax+sun_radius* sin (30*deg*i); \n \xa0\xa0\xa0\xa0 points[0].y = ay+sun_radius-sun_radius* cos (30*deg*i); \n \xa0\xa0\xa0\xa0 // B \n \xa0\xa0\xa0\xa0 points[1].x = bx+sr-sr* cos (30*deg*i); \n \xa0\xa0\xa0\xa0 points[1].y = by-sr* sin (30*deg*i); \n \xa0\xa0\xa0\xa0 // E \n \xa0\xa0\xa0\xa0 points[2].x = ex-sun_radius* sin (30*deg*i); \n \xa0\xa0\xa0\xa0 points[2].y = ey-(sun_radius-sun_radius* cos (30*deg*i)); \n \xa0\xa0\xa0\xa0 // D \n \xa0\xa0\xa0\xa0 points[3].x = dx-(sr-sr* cos (30*deg*i)); \n \xa0\xa0\xa0\xa0 points[3].y = dy+sr* sin (30*deg*i); \n \xa0\xa0\xa0\xa0 // 對菱形區域範圍塗色 \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 4, color); \n \xa0\xa0\xa0\xa0 // 在菱形區域外圍畫線, 明確界定菱形範圍 \n \xa0\xa0\xa0\xa0 gdImagePolygon(img, points, 4, color); \n \xa0\xa0\xa0\xa0 } \n } \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'ROC.html'}, {'title': '課堂note', 'text': '', 'tags': '', 'url': '課堂note.html'}, {'title': 'ssh', 'text': '下載putty \n 在putty資料夾內開啟puttygen.exe做一把金鑰匙 \n 將key儲存在github帳號內(開啟設定點選ssh) \n 回到puttygen.exe按save private key即可 \n 接著再開啟putty \n Host Name輸入github.com \n Saved Sessions輸入自己的學號 \n \n 點選proxy改設定 \n \n 再點選ssh內的Auth裡面Credentials \n \n 再匯出即可 \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};