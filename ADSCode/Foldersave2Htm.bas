Attribute VB_Name = "Foldersave2Htm"
Sub GAF()   '�������ݹ鴦���ļ�������WORD�ļ����������ļ����ͣ�
Attribute GAF.VB_Description = "����F:\\�ҵ��ĵ�\\ADSCode\\dou���е�docxת��Ϊhtm�ļ�"
Attribute GAF.VB_ProcData.VB_Invoke_Func = "Normal.Foldersave2Htm.GAF"
     Set fso = CreateObject("Scripting.FileSystemObject")   '��������
     Set folder = fso.GetFolder("F:\personalCode\ADSCode\dou\") 'ָ���˶���
     Set Files = folder.Files
     
     For Each f In Files
     
        If Right(f.Path, 3) = "doc" Or Right(f.Path, 4) = "docx" Then

               Set doc = Documents.Open(fileName:=f.Path, Visible:=False) '���ļ�
               
                '�˴�����Ҫִ�����ݡ�������word�洢Ϊɸѡ����htm
                ChangeFileOpenDirectory "F:\personalCode\ADSCode\dou\"
                htmlName = fso.getbasename(f) + ".htm"
                doc.SaveAs2 fileName:=htmlName, FileFormat:= _
                    wdFormatFilteredHTML, LockComments:=False, Password:="", AddToRecentFiles _
                    :=True, WritePassword:="", ReadOnlyRecommended:=False, EmbedTrueTypeFonts _
                    :=False, SaveNativePictureFormat:=False, SaveFormsData:=False, _
                    SaveAsAOCELetter:=False, CompatibilityMode:=0
               doc.Close True '�ͷ�DOC
        End If
     Next
     MsgBox ("�������")
End Sub


