Attribute VB_Name = "Foldersave2Htm"
Sub GAF()   '函数：递归处理文件夹所有WORD文件（或其他文件类型）
Attribute GAF.VB_Description = "将“F:\\我的文档\\ADSCode\\dou”中的docx转换为htm文件"
Attribute GAF.VB_ProcData.VB_Invoke_Func = "Normal.Foldersave2Htm.GAF"
     Set fso = CreateObject("Scripting.FileSystemObject")   '创建对象
     Set folder = fso.GetFolder("F:\personalCode\ADSCode\dou\") '指定了对象
     Set Files = folder.Files
     
     For Each f In Files
     
        If Right(f.Path, 3) = "doc" Or Right(f.Path, 4) = "docx" Then

               Set doc = Documents.Open(fileName:=f.Path, Visible:=False) '打开文件
               
                '此处放主要执行内容……，将word存储为筛选过的htm
                ChangeFileOpenDirectory "F:\personalCode\ADSCode\dou\"
                htmlName = fso.getbasename(f) + ".htm"
                doc.SaveAs2 fileName:=htmlName, FileFormat:= _
                    wdFormatFilteredHTML, LockComments:=False, Password:="", AddToRecentFiles _
                    :=True, WritePassword:="", ReadOnlyRecommended:=False, EmbedTrueTypeFonts _
                    :=False, SaveNativePictureFormat:=False, SaveFormsData:=False, _
                    SaveAsAOCELetter:=False, CompatibilityMode:=0
               doc.Close True '释放DOC
        End If
     Next
     MsgBox ("处理完成")
End Sub


