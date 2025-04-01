this.default = function () {
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer);
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer({
        documentPath: "https://cdn.syncfusion.com/content/pdf/annotations.pdf",
        resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
        toolbarSettings: {
            showTooltip: true, 
            toolbarItems: [
                "OpenOption",
                "UndoRedoTool",
                "PageNavigationTool",
                "MagnificationTool",
                "PanTool",
                "SelectionTool",
                "CommentTool",
                "SubmitForm",
                "FormDesignerEditTool",
                "FreeTextAnnotationOption",
                "InkAnnotationOption",
                "ShapeAnnotationOption",
                "StampAnnotation",
                "SignatureOption",
                "SearchOption",
                "PrintOption",
                "DownloadOption"
            ],
            formDesignerToolbarItems: [
                "TextboxTool",
                "PasswordTool",
                "CheckBoxTool",
                "RadioButtonTool",
                "DropdownTool",
                "ListboxTool",
                "DrawSignatureTool",
                "DeleteTool"
            ]}
    });
    viewer.annotationSelect = AnnotationSelectedEvent;
    viewer.annotationUnSelect = AnnotationUnSelectedEvent;
    viewer.annotationMove = UpdateAnnotationPropertiesPanel;
    viewer.annotationResize = UpdateAnnotationPropertiesPanel;
    viewer.annotationRemove = AnnotationUnSelectedEvent;
    viewer.enableAnnotationToolbar = false;
    
    var switchObj = new ejs.buttons.Switch({ checked: true });
    switchObj.appendTo('#checked');

    switchObj.change = function (args) {
        if (args.checked) {
            viewer.serviceUrl = '';
        }
        else {
            viewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
        }
        viewer.dataBind();
        viewer.load(viewer.documentPath, null);
    };
    var syncfusionLogo = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADJCAMAAABYMS1zAAAAllBMVEX///8rNXz2kh7b3OXQ0d8jLnlMU4wfK3hYXpH5+fvz8/bv7/SRlbYAAGyLj7GMkLBGToqdoLt4fKS1t8vIydoAGHEXJXUMHnP1hAD1jAD9483+9u7707L4sXSDh6s0PoL3oE76xpr4qV/97d/5vov96NYADW/2m0b7zaX2mTv4t3v5uYT83cL4rms+R4YAAGX2kjBubpsmc7m7AAAEKUlEQVR4nO3c6VbiQBAF4Dai7AiikCbIjuyK7/9ykziTCJLuVLUcu5O5938d8x2kUr0chEAQBEEQpBgJbD/A9RLMVnPbz3C1LHw5Gdh+iCtl7Xue3AxtP8ZVMpReGOlNC/DF2Xt/I+U295rlRHoxZ5ZzzXyWWELNZGn7eX6SYHdiidrA3vYT/SBT3zuPXNt+JOOsv1tCzSKnX5y9vLB4nr/N5TQw8NIwnjzksA3MV6mWqKnlrg0EM4UlmgbyNtu8KC2fs43tx2NlobFEnDzNNmst5bMN5EYzzLKEmlVOmtpgo/8n+/fFyUVTW6ob2ZlG5qCpBbpGdhbf/QXbjmoJNTvHZ5sp3ZI521S7oxY93biqwSga3Wr+/ppjyZptaq3XMjm9Rox569Or3p/Ufz51UtZqdPs2tYf+DTl3CaZdplc11Zj5kWnxtAs2q5hANSlr4+9UTc0mRjMp6zWqfRubmK2ZJdRs0lu0RQyrKX/TTBzDEKZLVeQxfWPdGoY0XSosqpnTFka55KdgVK8aSxizpvzPolxEW8LMLvf7qPHVS2hrn4ypRreAttYADF8y2qMBe615aoTRHgxYfGkOjwYfjnbpbHOc2U/YCwD9EYfVqZm4lZHE32ktttczW05T818yNjTsYkRwcVim+R+bZG1nWMakHpcpLJvMPU3rGLGXtC+OzL6CYh8jlqT5mbKf6QDm/PRfFcq5swsYEewyLaRTZycwYVPLOGyiHc+4gYkW0bpzwMym7BZG7DUaSdwvdwYTzjaqN45PvRfoDkbMD+kan3zI5BBGBIs0jU8/N3cJk3rqLDMmZXcxlws21pm5Y5jvCzY54xz8uYYRy8PpzcbsSdlpjAhO9m2OvLN/9zDRbBNzmLcaHcQks41cMOucxIh91NTkjFvmJkYMVlJKdpWjmOi8k3+3xFWMCAxuljiLMUmxMKP3Z3JeWzFm3KRX6a6bXDfVpw4jyWNxihq6i0BX1rBiVPVrFgRBkIKkVmekZlSV9OaAEwNLtfvxSE9ye7bFKPpIXpovjBxMBs1Ws0dOPxln3p7pVV/jjGSEvCd7ivnNQZNzUA4MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwPzvmOcCYVoFwlRLXUZKcRmnqJtcBBoysnb+lxkRBEEQSuq3jNTjKk6RYVUt/Xl1qXbuK/R04qpHRlE7mQAYRZV2SfHEmtQajN+e7T/GmArnt2fjC8TipnedX6xVYxhTc3mUYIxms/GdSRUHwxg0gQEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAaaImELdA3i9I6f3henTq5pfNzTK9CqjGxqdt3ty2g8x5qNNrxonmAq96H5sgBH1EiPJPdhbTlVyq4lTVDK41YQgCIIgCIIgSFr+AKg+KPUzaG6DAAAAAElFTkSuQmCC";
    //function for Annotation Properties
    function AnnotationBase() {
        this.annotationType = "Rectangle";
        this.pageNumber = 1;
        this.totalPageNumber = 0;
        this.annotationSelected = false;
        this.annotationUnSelected = true;
        this.annotationId = "";
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 100;
        this.opacity = 100;
        this.thickness = 1;
        this.fillColor = "rgba(0, 0, 0, 0)";
        this.strokeColor = "#FF0000";
        this.isPrint = true;
        this.isLocked = false;
        this.replayId = "";
        this.allowedInteractions = ["None"];
        this.author = "Guest";
        this.state = "None";
        this.comment = "New Comment";
        this.replyComments = [];
        this.isReply = false;
        this.replyAuthor = "Guest";
        this.replyState = "None";
        this.replyComment = "Reply Comment";
        this.editReply = false;
        this.stampsType = "Dynamic";
        this.dynamicStamp = "Approved";
        this.signHereStamp = "Accepted";
        this.standardBusinessStamp = "Approved";
        this.modifiedDate = new Date().toISOString();
        this.replyModifiedDate = new Date().toISOString();
        this.bounds = [];
        this.boundsString = "";
        this.vertexX0 = 100;
        this.vertexY0 = 100;
        this.vertexX1 = 200;
        this.vertexY1 = 100;
        this.lineHeadStart = "None";
        this.lineHeadEnd = "None";
        this.leaderLength = 0;
        this.vertexX = 10;
        this.vertexY = 10;
        this.vertexPointCount = 0;
        this.vertexPointString = "";
        this.vertexPoints = [];
        this.inkAnnotation = "Syncfusion";
        this.fontFamily = "Helvetica";
        this.fontStyle = "None";
        this.alignment = "Left";
        this.defaultText = "None";
        this.fontSize = 16;
        this.fontColor = "#000000";
        this.signHereStampList = ["Accepted", "InitialHere", "Rejected", "SignHere", "Witness"];
        this.replyMenuItems = [
            {
                text: 'Edit',
            },
            {
                text: 'Delete',
            }
        ];
        this.IsInputChange = false;
        this.customStampName = "Image";
        this.customStampImageSource = syncfusionLogo;
    }

    //function for comment properties
    function Comment() {
        this.id = "";
        this.author = "";
        this.note = "";
        this.modifiedDate = "";
        this.state = "";
    }

    var interactionsList = [
        { Type: 'None', Value: "None" },
        { Type: 'Delete', Value: "Delete" },
        { Type: 'Property Change', Value: "PropertyChange" },
        { Type: 'Move', Value: "Move" },
        { Type: 'Select', Value: "Select" },
        { Type: 'Resize', Value: "Resize" }
    ];

    var selectedAnnotation = new AnnotationBase();
    viewer.documentLoad = function (args) {
        selectedAnnotation.totalPageNumber = viewer.pageCount;
        pageNumberObj.max = viewer.pageCount;
        if (args.documentName === 'annotations.pdf') {
            viewer.annotation.addAnnotation("Highlight", {
                bounds: [{ x: 97, y: 610, width: 350, height: 14 }],
                pageNumber: 1
            });
            viewer.annotation.addAnnotation("Underline", {
                bounds: [{ x: 97, y: 723, width: 353.5, height: 14 }],
                pageNumber: 1
            });
            viewer.annotation.addAnnotation("Strikethrough", {
                bounds: [{ x: 97, y: 836, width: 376.5, height: 14 }],
                pageNumber: 1
            });
            viewer.annotation.addAnnotation("Line", {
                offset: { x: 200, y: 230 },
                pageNumber: 2,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            });
            viewer.annotation.addAnnotation("Arrow", {
                offset: { x: 200, y: 370 },
                pageNumber: 2,
                vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
            });
            viewer.annotation.addAnnotation("Rectangle", {
                offset: { x: 200, y: 480 },
                pageNumber: 2,
                width: 150,
                height: 75
            });
            viewer.annotation.addAnnotation("Circle", {
                offset: { x: 200, y: 620 },
                pageNumber: 2,
                width: 90,
                height: 90
            });
            viewer.annotation.addAnnotation("Polygon", {
                offset: { x: 200, y: 800 },
                pageNumber: 2,
                vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
            });
            viewer.annotation.addAnnotation("Distance", {
                offset: { x: 200, y: 230 },
                pageNumber: 3,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            });
            viewer.annotation.addAnnotation("Perimeter", {
                offset: { x: 200, y: 350 },
                pageNumber: 3,
                vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
            });
            viewer.annotation.addAnnotation("Area", {
                offset: { x: 200, y: 500 },
                pageNumber: 3,
                vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
            });
            viewer.annotation.addAnnotation("Radius", {
                offset: { x: 200, y: 630 },
                pageNumber: 3,
                width: 90,
                height: 90
            });
            viewer.annotation.addAnnotation("Volume", {
                offset: { x: 200, y: 810 },
                pageNumber: 3,
                vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
            });
            viewer.annotation.addAnnotation("FreeText", {
                offset: { x: 250, y: 150 },
                fontSize: 16,
                fontFamily: "Helvetica",
                pageNumber: 4,
                width: 200,
                height: 40,
                isLock: false,
                defaultText: "Syncfusion"
            });
            viewer.annotation.addAnnotation("Stamp", {
                offset: { x: 200, y: 240 },
                pageNumber: 4
            }, "Approved");
            viewer.annotation.addAnnotation("Stamp", {
                offset: { x: 200, y: 350 },
                pageNumber: 4
            }, null, "SignHere");
            viewer.annotation.addAnnotation("Stamp", {
                offset: { x: 200, y: 460 },
                pageNumber: 4
            }, null, null, "Confidential");
            //The customStampImageSource property contains the stamp image as a base64 string
            viewer.annotation.addAnnotation("Stamp", {
                offset: { x: 200, y: 530 },
                pageNumber: 4,
                customStamps: [
                    {
                        customStampName: "Image",
                        customStampImageSource:
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAqwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQHAv/EAEEQAAEDAwIEAwYDBAYLAAAAAAECAwQABREGIRIxQVETYXEHFCIygZEVQmIjUnKCJCUzU6HRFhc1c5KisbKzwvD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcaUpQKUpQKUpQKUpQKUpQKVzXGdFtsN2ZPfbYjNJ4nHHDgJFfEK5Q5ttbuUaQhcNxvxUPcklPfflQdlYJxURpe/salthuMNpxEYvuNtKc28VKVcPGB2JB577Vyz7pNuUxy26eWlCml8Mu4OI4kR/0oB2Wvp2T17EJK43qDbloakOqL7m6I7TanHVjOMhCQTjzxgVut89i4Mqdj8Y4VlC0OIKFIUOYKTuOn0INRZZtWkrVLuDpIIHHJlPK4nX1dOJR5kk4A5DYDArVoWbHuVgTPjvF5Ul5xx5zhIBc4jkJyBlI+UHqE0FjpSlApSlApSlApSlApSlApSlApSlArClAczgVmqr7QZLptkezxHi1KvD4ihxKsFprBU6v6IB+pFBTdUKf1uUuFa0WpyUIVoYBx706chchXdKEhZSPLNXXVTsOw6NdjNxkvJS0iLEidHnDhLaPME4z5ZzVHk6kTHu1vTpyE1Jf8L3Oww1ZDaGc4XJXjklXDhP6UlWd63ybrL1rq1mNa1hLcAKEeQgcTbbvyuScHnw5KGweZJPIVRYoDT6okfSlnfWhmCwlu43FGAUKxu2j9atyT+UHvirZBixLZBaiQ2kR4zCMIQnZKRWuz2yLZ7czBgo4GWh13KidypR6qJJJPevOvaFqCXqC4HSGmzxlxQbmvJJAPXwwe2M8R9R3FQc1xde9qOqEW+C44jTFuVxPvtnHvCvI+e4HYZPavV4sdmLGajxmktMtJCENpGAkDkBUbpixRNO2dm3Q0/Cj4lrPNazzUf/uWKlkkEZByKDNKUoFKUoFKUoFKUoFKwahZ2p7dFfMZhTs+ZnHu0FHirB/VjZHqogUE3WOIYzUApzUlwBKUxLOwQCFL/bv467DCEn6qr5i6btk5ht+ZOlXlCxlLkiTxtr8whGG8fy0HdK1FZorymHbjH8dPNlC+NY/lTk1XNTe0m12SCXBFnrkOpX7uh6ItkKUBzPGEnhzjcA1bokKLAZS1BjMx20jAQy2EjHoK85i6PuOovaFNv+pWPDt8J/ggMKUCXktq+BX8HNXmT2G9HLF1trSyW2GrUFgbluT3eCIRIS26tS/iSjwgCcDl35Z3qBlSb/edVcN58e4tojKafiW2MfDQpRBXF8X5UnZPGsq5ZAr0TV2j52oL9Anx7wqCxHYWypLbeXAFH4lNqz8KiNs8x0qy2e1QrNbmYFuZDUdkYSkHOT1JPUk7k0HhsG6u3SHPeisLFwnucE95hOPdmc8DUNhR/OrCR5Ak9NvX9F6cRp20IZIR706AX1I5DA2Qn9KRsPvzJqGmXG0N6pfk3KTEhW2ykBsLKUh2Y4nKlY6lKCAOuVmuafry5T5rFs0vaHQ5JSVIm3FBaQhvq7wfNwjurAPnQZ9pms1WtlVmtDqRcnxwrdK+ERknqT0Vj7DftUN7OA1BilywWx65TnU8PjOAtMsJJzlbhBypXMhPFgADbrF6B0sNSagkzrk+5cbTDeUQ5IHwy3T+bHbYE/y9yK9sabQ02lDSAhCRhKUjAAoIaFaZ8gh++zg8vIKYsUFphB+/Ev8AmONuVTYGBgcqzSoFKUoFKUoFKUoFcV4mOW+2yJbEN6Y40gqTHYGVuHsK7awRmg8rd/1gameJn2n8Ptv5YQn+78f+8cSFLI57AJ8/Oy2eyalhxkRo79htEVI2YgQ1uEH+JSgD68NW/FQ2r7yqxWCTNZR4knZqM1/ePLPChP3IoKRc4l91FqJ3TkfUst2Aygfiz7TDTaEA8mkEAnjPXfAH2NohaPehR2Y8bVF9QwygNttJMcJSkDAAAZru0hY02CyMxFK8SWv9rMfPN55W6lE9d9vQCpughmrLNZVxI1Fc19kupYUn/wAYP+NdQVMjD+khEhsfM40nhUPMp3z9D9K76xQRN/uNxjWj3qwW9F0krKfDa8YISUn83F25VVocf2kXdR/EJlrskZQxiM14ryR5ZJA9c/SrHo973m2SFjPhCfKSzn9wPLCceXbyxUpPmRrdDemTHUMx2UFbjizgJAoPGrbpyJBRPvEi53STfhc34MRCVMrckLSvCT8aFEEjBUQdhUlfbHcrcItuYvc+VqbUBDcpf7PgDSfnJPBxBCQcDBGcnlUn7Om4kly+aonhbPBPkeGiRsIqCEqUcHkSMZ9K5bRqqMbjJ1E5FkTrndFe72m2sAF1MVBI4iD8iVKyoqO2w7VRbrJpRdkt7MGDe56GGhgJ8Njn1P8AZ9fPNd5gXNKQEXt0q7uRmz/0AqFja29znGFq2EmxuqaLzDrkhK2XUj5gF7YUNvhqsX+66nvtqlarsrsmDa7aUvQIqQULuCUqHiLdGPk4c8I686g9BMK8/lu7IxyzCB/9q4bpJkWeP7xd9TQojGeHjdipRk9hlW5/yrF21raoEGM/HcM+TMSDEhwyFuv55YA5DfcnYVx2fTD9wm/jeskMS7goYYhY42IKeyQeajtlR68tqCUjtXWVHakQL/FejupC23PcwsLSeoKVgEVsLWomsFMm1yAM5C2HGir6hSsfY1B6ILViuV50utSWkRpHvNvQTgGO6OLCe/CviB7bVMXjVMC2vCG0VTrk4MtQIeHHleZHJCf1KwKDTcNSqskB2XqSCYjTQ3fYcDzSj0SOSgSdhlP1r50FqherbM5cVQVQwmQtkNlfFxBON8/XB8wa4JNsfUzJ1Jq/wXFQWnH4tvbPEzFCUk8RyPjd2+bkOQ7nHs0iSLRY7dBkKUoy4gnYV8yHFEFxPoCtOPU+VBdaUpQKUpQKqF4H4xry027YxrYyq4yB3cPwND/vV9BVvNVTRf8ATrhqC9KIUJU4x2T2aZHAB/xcZ+tBa6UpQKr+r7lIjRWrdaz/AFrcleBF2z4W3xOq8kDf1wOtSV5ukSz216fOc4GGhk4GSo9EpHVROwHU1DaWtst2S9qG+N8Nzlp4WWSc+6R85S0P1dVHqfSgm7Rb2bTbItvjcXhR2g2kqOVKx1J6k8zVbfP+leoSxkGx2h7LxztJlD8h6FCOZ/VjtXdq25ymWY9ptSv61uSi2yr+4Rj43T5JHLzIrRfHIujtCy/dthFiqQyD8zrqhgZ7qUo/40FJsbL2q7W/YYchUdqdMlXC5SEDJQhbq/CbHTKuEEj90edXfRWi4Gk4yvAUqTMdADsp35ikckj91I7Vn2e6bTpnTUaG5hUtweLJcHVw9PQch6VZ6Dhudot12aQ1dIEWa2hXEhEllLgSe4Cga7OBPBwYHDjGMbYr6pQRNp03ZrM669arVChuu/OphkJJ8tunlUt0pSgjLxYLVew2LtAYleEctqcT8SPRXMfevq0WO12VtTdpgRoiVHKy02AVnuo8z9akaUEBr2O9L0beI8dtx1xyMpIQ2kqUodQANycZrk07JVeLyq4R2HmrZCiiJFW62UF9SilS1AHfhHAgA7b8XlVqIzWMb0GaUpQKUpQc9wkCJAkyVcmWlOH6AmoL2bsqZ0LZi4SXHowfcUeZU58ZP3VUpqNlcjT1zYaGVuRHUJA6koIFcuiZDcnR9lea+RcFkgdvgG1BN1omS48GM7JluoZYaSVuOLOEpSOZJrXdLjEtUF2bcJLceM0MrccOAP8AP0qqR4czWk1qfd2HItgZWFxLe6MLlKHJ14dE9kH1NBttDEjVVzYvtxaUza4547ZCdThSz0kLHQ4+UdAc86tcmQzDjOyJLiW2WUFxxxWwSkDJJ+lbQAOVVPU6vx29xdLsqPgBKZdzIG3ghWEtE9CtX/Kk0GzSTDlwekamnNlL08BMNCs5ZijdAweRVniPqB0qsarce1XrezWlghVsiTCp3B/tFtDicPok8CP4lq7VedSzXYFr8OBwpmyVCPEyPhStQPxEfupAKj5JNVz2eW9t2RIvLJWqGlsQbetXN1pCsuPerjmVZ6gCqLyBis0pUClKUClKUClKUClKUClKUClKUGCMjFVNqw36yeOxpmbb/wAPdcU43GntLPuqlHJCFJO6ckkJI2zzq20oKtE0iZE5q46mnKu8to8TLSmwiMwe6G99/wBSiTVoGwrNcV4uUez2yTcJiiGY7ZWrAyT2AHUk7D1oMXq6R7PapNxlk+FHQVkAZKj0SB1JOAPWozRtqfhW5ybcf9qXJz3qZk54FEbNg9kDCfoT1qGi++alvEGJdGwlq2hE+e0FApTKVu0we4Qk8R7nhNXkcqCs6q0zK1DcIWbkqNbW23ESmWk4ceCsZAV+UEAgnngnvViix2okZqPHbS2y0kIbQkYCUjYAVtpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKouv7mwi7W2HJBdZiJNxXHSd5DoUER2gOpU4rI/gq9VxO2i3PXRu6OwmFz2m/DbkKQCtKck4B+p+9BxaTtblqtQEvhM+UtUqatO4U8vdW/YbJHkkVNVgDFZoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoP//Z"
                    }
                ]
            });
            //The pathData property holds the value of the ink drawn
            viewer.annotation.addAnnotation("Ink", {
                offset: { x: 250, y: 860 },
                pageNumber: 4,
                width: 200,
                height: 60,
                path: '[{\"command\":\"M\",\"x\":244.83334350585938,\"y\":982.0000305175781},{\"command\":\"L\",\"x\":244.83334350585938,\"y\":982.0000305175781},{\"command\":\"L\",\"x\":250.83334350585938,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":946.0000305175781},{\"command\":\"L\",\"x\":254.16668701171875,\"y\":940.6667175292969},{\"command\":\"L\",\"x\":256.8333435058594,\"y\":931.3333435058594},{\"command\":\"L\",\"x\":257.5,\"y\":929.3333435058594},{\"command\":\"L\",\"x\":258.8333435058594,\"y\":926.6667175292969},{\"command\":\"L\",\"x\":259.5,\"y\":924.0000305175781},{\"command\":\"L\",\"x\":259.5,\"y\":922.6667175292969},{\"command\":\"L\",\"x\":258.8333435058594,\"y\":922.0000305175781},{\"command\":\"L\",\"x\":258.16668701171875,\"y\":922.0000305175781},{\"command\":\"L\",\"x\":256.8333435058594,\"y\":922.0000305175781},{\"command\":\"L\",\"x\":256.16668701171875,\"y\":922.6667175292969},{\"command\":\"L\",\"x\":254.83334350585938,\"y\":923.3333435058594},{\"command\":\"L\",\"x\":254.16668701171875,\"y\":923.3333435058594},{\"command\":\"L\",\"x\":253.5,\"y\":923.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":925.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":927.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":936.0000305175781},{\"command\":\"L\",\"x\":253.5,\"y\":940.6667175292969},{\"command\":\"L\",\"x\":254.83334350585938,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":260.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":264.16668701171875,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":274.16668701171875,\"y\":958.6667175292969},{\"command\":\"L\",\"x\":278.16668701171875,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":281.5,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":285.5,\"y\":964.6667175292969},{\"command\":\"L\",\"x\":286.8333740234375,\"y\":967.3333435058594},{\"command\":\"L\",\"x\":286.8333740234375,\"y\":970.0000305175781},{\"command\":\"L\",\"x\":282.8333740234375,\"y\":978.6667175292969},{\"command\":\"L\",\"x\":278.16668701171875,\"y\":983.3333435058594},{\"command\":\"L\",\"x\":266.16668701171875,\"y\":991.3333435058594},{\"command\":\"L\",\"x\":259.5,\"y\":993.3333435058594},{\"command\":\"L\",\"x\":252.16668701171875,\"y\":994.0000305175781},{\"command\":\"L\",\"x\":240.83334350585938,\"y\":991.3333435058594},{\"command\":\"L\",\"x\":236.16668701171875,\"y\":988.6667175292969},{\"command\":\"L\",\"x\":230.16668701171875,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":228.83334350585938,\"y\":980.6667175292969},{\"command\":\"L\",\"x\":228.16668701171875,\"y\":978.6667175292969},{\"command\":\"L\",\"x\":228.83334350585938,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":230.16668701171875,\"y\":973.3333435058594},{\"command\":\"L\",\"x\":236.16668701171875,\"y\":971.3333435058594},{\"command\":\"L\",\"x\":240.83334350585938,\"y\":971.3333435058594},{\"command\":\"L\",\"x\":246.16668701171875,\"y\":972.0000305175781},{\"command\":\"L\",\"x\":257.5,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":262.8333435058594,\"y\":976.0000305175781},{\"command\":\"L\",\"x\":269.5,\"y\":977.3333435058594},{\"command\":\"L\",\"x\":276.16668701171875,\"y\":978.6667175292969},{\"command\":\"L\",\"x\":279.5,\"y\":978.0000305175781},{\"command\":\"L\",\"x\":285.5,\"y\":976.6667175292969},{\"command\":\"L\",\"x\":288.16668701171875,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":292.8333740234375,\"y\":969.3333435058594},{\"command\":\"L\",\"x\":293.5,\"y\":966.6667175292969},{\"command\":\"L\",\"x\":294.16668701171875,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":293.5,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":293.5,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":292.8333740234375,\"y\":956.6667175292969},{\"command\":\"L\",\"x\":291.5,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":291.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":291.5,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":291.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":292.16668701171875,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":292.8333740234375,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":294.16668701171875,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":295.5,\"y\":964.6667175292969},{\"command\":\"L\",\"x\":297.5,\"y\":969.3333435058594},{\"command\":\"L\",\"x\":298.8333740234375,\"y\":970.6667175292969},{\"command\":\"L\",\"x\":301.5,\"y\":970.0000305175781},{\"command\":\"L\",\"x\":304.16668701171875,\"y\":968.6667175292969},{\"command\":\"L\",\"x\":305.5,\"y\":966.0000305175781},{\"command\":\"L\",\"x\":308.8333740234375,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":310.16668701171875,\"y\":957.3333435058594},{\"command\":\"L\",\"x\":310.8333740234375,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":310.8333740234375,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":310.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":311.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":312.8333740234375,\"y\":959.3333435058594},{\"command\":\"L\",\"x\":316.16668701171875,\"y\":968.0000305175781},{\"command\":\"L\",\"x\":317.5,\"y\":972.6667175292969},{\"command\":\"L\",\"x\":318.16668701171875,\"y\":977.3333435058594},{\"command\":\"L\",\"x\":319.5,\"y\":983.3333435058594},{\"command\":\"L\",\"x\":319.5,\"y\":986.0000305175781},{\"command\":\"L\",\"x\":319.5,\"y\":988.0000305175781},{\"command\":\"L\",\"x\":318.8333740234375,\"y\":988.0000305175781},{\"command\":\"L\",\"x\":318.16668701171875,\"y\":988.6667175292969},{\"command\":\"L\",\"x\":316.16668701171875,\"y\":987.3333435058594},{\"command\":\"L\",\"x\":314.8333740234375,\"y\":985.3333435058594},{\"command\":\"L\",\"x\":314.16668701171875,\"y\":980.6667175292969},{\"command\":\"L\",\"x\":314.8333740234375,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":316.16668701171875,\"y\":969.3333435058594},{\"command\":\"L\",\"x\":319.5,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":320.16668701171875,\"y\":957.3333435058594},{\"command\":\"L\",\"x\":321.5,\"y\":955.3333435058594},{\"command\":\"L\",\"x\":322.16668701171875,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":322.8333740234375,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":324.16668701171875,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":324.8333740234375,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":326.8333740234375,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":328.16668701171875,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":328.8333740234375,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":329.5,\"y\":962.0000305175781},{\"command\":\"L\",\"x\":330.16668701171875,\"y\":962.0000305175781},{\"command\":\"L\",\"x\":330.16668701171875,\"y\":962.6667175292969},{\"command\":\"L\",\"x\":330.16668701171875,\"y\":962.0000305175781},{\"command\":\"L\",\"x\":330.8333740234375,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":331.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":332.8333740234375,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":333.5,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":334.8333740234375,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":335.5,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":336.16668701171875,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":337.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":338.8333740234375,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":340.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":341.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":342.8333740234375,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":344.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":346.8333740234375,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":349.5,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":350.8333740234375,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":351.5,\"y\":946.6667175292969},{\"command\":\"L\",\"x\":352.8333740234375,\"y\":944.0000305175781},{\"command\":\"L\",\"x\":352.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":354.8333740234375,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":354.8333740234375,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":946.6667175292969},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":355.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":356.16668701171875,\"y\":957.3333435058594},{\"command\":\"L\",\"x\":358.16668701171875,\"y\":959.3333435058594},{\"command\":\"L\",\"x\":360.16668701171875,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":364.16668701171875,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":370.8333740234375,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":373.5,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":375.5,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":376.16668701171875,\"y\":933.3333435058594},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":931.3333435058594},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":930.0000305175781},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":929.3333435058594},{\"command\":\"L\",\"x\":376.16668701171875,\"y\":930.0000305175781},{\"command\":\"L\",\"x\":375.5,\"y\":932.0000305175781},{\"command\":\"L\",\"x\":375.5,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":374.8333740234375,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":374.8333740234375,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":375.5,\"y\":966.0000305175781},{\"command\":\"L\",\"x\":377.5,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":378.16668701171875,\"y\":977.3333435058594},{\"command\":\"L\",\"x\":380.8333740234375,\"y\":981.3333435058594},{\"command\":\"L\",\"x\":382.16668701171875,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":383.5,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":387.5,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":389.5,\"y\":980.6667175292969},{\"command\":\"L\",\"x\":392.16668701171875,\"y\":976.6667175292969},{\"command\":\"L\",\"x\":392.8333740234375,\"y\":973.3333435058594},{\"command\":\"L\",\"x\":392.16668701171875,\"y\":970.0000305175781},{\"command\":\"L\",\"x\":388.8333740234375,\"y\":965.3333435058594},{\"command\":\"L\",\"x\":385.5,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":382.8333740234375,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":377.5,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":375.5,\"y\":964.6667175292969},{\"command\":\"L\",\"x\":373.5,\"y\":965.3333435058594},{\"command\":\"L\",\"x\":374.8333740234375,\"y\":963.3333435058594},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":382.16668701171875,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":384.16668701171875,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":387.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":388.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":388.16668701171875,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":388.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":388.8333740234375,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":389.5,\"y\":959.3333435058594},{\"command\":\"L\",\"x\":389.5,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":390.16668701171875,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":390.8333740234375,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":393.5,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":396.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":398.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":400.16668701171875,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":400.16668701171875,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":400.8333740234375,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":400.8333740234375,\"y\":947.3333435058594},{\"command\":\"L\",\"x\":401.5,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":402.16668701171875,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":403.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":404.8333740234375,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":406.16668701171875,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":407.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":410.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":412.16668701171875,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":940.6667175292969},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":938.0000305175781},{\"command\":\"L\",\"x\":415.5,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":418.8333740234375,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":420.16668701171875,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":421.5,\"y\":946.6667175292969},{\"command\":\"L\",\"x\":422.8333740234375,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":423.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":423.5,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":422.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":421.5,\"y\":955.3333435058594},{\"command\":\"L\",\"x\":421.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":422.16668701171875,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":422.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":424.8333740234375,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":425.5,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":428.16668701171875,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":429.5,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":430.16668701171875,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":432.8333740234375,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":434.8333740234375,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":437.5,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":440.16668701171875,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":441.5,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":442.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":941.3333435058594},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":946.0000305175781},{\"command\":\"L\",\"x\":443.5,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":444.16668701171875,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":445.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":447.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":450.16668701171875,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":452.16668701171875,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":453.5,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":452.8333740234375,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":452.16668701171875,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":450.8333740234375,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":448.8333740234375,\"y\":936.0000305175781},{\"command\":\"L\",\"x\":447.5,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":446.16668701171875,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":445.5,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":445.5,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":446.16668701171875,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":446.8333740234375,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":452.16668701171875,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":454.8333740234375,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":456.8333740234375,\"y\":936.0000305175781},{\"command\":\"L\",\"x\":459.5,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":460.8333740234375,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":461.5,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":944.0000305175781},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":941.3333435058594},{\"command\":\"L\",\"x\":462.8333740234375,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":464.16668701171875,\"y\":935.3333435058594},{\"command\":\"L\",\"x\":465.5,\"y\":933.3333435058594},{\"command\":\"L\",\"x\":466.16668701171875,\"y\":932.6667175292969},{\"command\":\"L\",\"x\":467.5,\"y\":933.3333435058594},{\"command\":\"L\",\"x\":469.5,\"y\":935.3333435058594},{\"command\":\"L\",\"x\":470.16668701171875,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":472.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":472.8333740234375,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":474.16668701171875,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":475.5,\"y\":944.0000305175781},{\"command\":\"L\",\"x\":478.16668701171875,\"y\":941.3333435058594},{\"command\":\"L\",\"x\":481.5,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":484.8333740234375,\"y\":934.0000305175781},{\"command\":\"L\",\"x\":488.8333740234375,\"y\":929.3333435058594},{\"command\":\"L\",\"x\":489.5,\"y\":928.0000305175781}]'
            });
            viewer.annotation.addAnnotation("StickyNotes", {
                offset: { x: 300, y: 980 },
                pageNumber: 4,
                isLock: false
            });
        }
        selectedAnnotation = new AnnotationBase();
        AnnotationUnSelectedEvent();
    };

    viewer.appendTo('#pdfViewer');
    //Defining add annotation panel properties
    var annotationListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.annotationType,
        change: function () { onAnnotationChange(); }
    });
    annotationListObj.appendTo("#annotationsList");

    var pageNumberObj = new ej.inputs.NumericTextBox({
        min: 1,
        format: "n0",
        showSpinButton: true,
        value: selectedAnnotation.pageNumber,
        change: function (args) { return onPropertiesValueChange('pageNumber', args); }
    });
    pageNumberObj.appendTo("#pageNumber");

    //Properties of settings panel
    var XPositionObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.x,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('x', args); }
    });
    XPositionObj.appendTo("#Xposition");

    var YPositionObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.y,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('y', args); }
    });
    YPositionObj.appendTo("#Yposition");

    var widthObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.width,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('width', args); }
    });
    widthObj.appendTo("#width");

    var heightObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.height,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('height', args); }
    });
    heightObj.appendTo("#height");

    var shapeOpacityObj = new ej.inputs.NumericTextBox({
        min: 0,
        max: 100,
        showSpinButton: false,
        value: selectedAnnotation.opacity,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('opacity', args); }
    });
    shapeOpacityObj.appendTo("#shapeOpacity");

    var strokeThicknessObj = new ej.inputs.NumericTextBox({
        min: 1,
        max: 12,
        format: "n0",
        showSpinButton: false,
        value: selectedAnnotation.thickness,
        change: function (args) { return onPropertiesValueChange('thickness', args); }
    });
    strokeThicknessObj.appendTo("#strokeThickeness");

    var leaderLengthObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.leaderLength,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('leaderLength', args); }
    });
    leaderLengthObj.appendTo("#leaderLength");

    var lineHeadStartListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.lineHeadStart,
        change: function (args) { return onPropertiesValueChange('lineHeadStart', args); }
    });
    lineHeadStartListObj.appendTo("#lineHeadStartList");

    var lineHeadEndListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.lineHeadEnd,
        change: function (args) { return onPropertiesValueChange('lineHeadEnd', args); }
    });
    lineHeadEndListObj.appendTo("#lineHeadEndList");

    var fillColorPickerObj = new ej.inputs.ColorPicker({
        mode: 'Palette',
        showButtons: true,
        value: selectedAnnotation.fillColor,
        change: function (args) { return onColorChange('fillColor', args); }
    });
    fillColorPickerObj.appendTo("#fillColorinput");

    var strokeColorPickerObj = new ej.inputs.ColorPicker({
        mode: 'Palette',
        showButtons: true,
        value: selectedAnnotation.strokeColor,
        change: function (args) { return onColorChange('strokeColor', args); }
    });
    strokeColorPickerObj.appendTo("#strokeColorinput");

    //print and lock field properties
    var printAnnotationCheckBoxObj = new ej.buttons.CheckBox({
        value: selectedAnnotation.isPrint,
        checked: selectedAnnotation.isPrint,
        change: function (args) { return onPrintAnnotationChecked(args); }
    });
    printAnnotationCheckBoxObj.appendTo("#PrintAnnotation-isTrueCheckbox");

    function onPrintAnnotationChecked(args) {
        selectedAnnotation.isPrint = args.checked;
        if (selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    }

    var lockAnnotationCheckBoxObj = new ej.buttons.CheckBox({
        checked: selectedAnnotation.isLocked,
        change: function (args) { onLockAnnotationChecked(args); },
        value: selectedAnnotation.isLocked
    });
    lockAnnotationCheckBoxObj.appendTo("#LockAnnotation-isTrueCheckbox");

    function onLockAnnotationChecked(args) {
        selectedAnnotation.isLocked = args.checked;
        var divElement = document.getElementById('allowinstractionsIstrue');
        if (args.checked) {
            divElement.style.display = "block";
            if(selectedAnnotation.annotationSelected){
                allowedInteractionsListObj.value = selectedAnnotation.allowedInteractions;
            }
            else{
                allowedInteractionsListObj.value = ["Select","Resize"];
            }
            allowedInteractionsListObj.dataBind();
        }
        else {
            divElement.style.display = "none";
        }
        if (selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    }

    var allowedInteractionsListObj = new ej.dropdowns.MultiSelect({
        dataSource: interactionsList,
        fields: { text: 'Type', value: 'Value' },
        value: ["None"],
        mode: 'CheckBox',
        placeholder: "Select Interactions",
        showDropDownIcon: true,
        allowFiltering: false,
        popupHeight: '350px',
        change: function () {
            selectedAnnotation.allowedInteractions = allowedInteractionsListObj.value;
            if (selectedAnnotation.annotationSelected) {
                updateAnnotationButtonObj.disabled = false;
            }
        }
    });
    allowedInteractionsListObj.appendTo("#interactionDropdownTree");

    //Text Field properties
    var defaultTextObj = new ej.inputs.TextBox({
        value: selectedAnnotation.defaultText,
        change: function (args) { return onPropertiesValueChange('defaultText', args); }
    });
    defaultTextObj.appendTo("#defaultText");

    var fontFamilyListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.fontFamily,
        change: function (args) { return onPropertiesValueChange('fontFamily', args); }
    });
    fontFamilyListObj.appendTo("#fontFamilyList");

    var textAlignmentListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.alignment,
        change: function (args) { return onPropertiesValueChange('alignment', args); }
    });
    textAlignmentListObj.appendTo("#textAlignmentList");

    var fontStyleListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.fontStyle,
        change: function (args) { return onPropertiesValueChange('fontStyle', args); }
    });
    fontStyleListObj.appendTo("#fontStyleList");

    var fontSizeObj = new ej.inputs.NumericTextBox({
        min: 1,
        showSpinButton: false,
        value: selectedAnnotation.fontSize,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('fontSize', args); }
    });
    fontSizeObj.appendTo("#fontSize");

    var fontColorPickerObj = new ej.inputs.ColorPicker({
        mode: 'Palette',
        showButtons: true,
        value: selectedAnnotation.fontColor,
        change: function (args) { return onColorChange('fontColor', args); }
    });
    fontColorPickerObj.appendTo("#fontColorInput");

    //Properties of coordinate points
    var X1PositionObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.X1PositionObj,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('vertexX0', args); }
    });
    X1PositionObj.appendTo("#X1position");

    var X2PositionObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.X2PositionObj,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('vertexX1', args); }
    });
    X2PositionObj.appendTo("#X2position");

    var Y1PositionObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.Y1PositionObj,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('vertexY0', args); }
    });
    Y1PositionObj.appendTo("#Y1position");

    var Y2PositionObj = new ej.inputs.NumericTextBox({
        min: 0,
        showSpinButton: false,
        value: selectedAnnotation.Y2PositionObj,
        format: "###.##",
        change: function (args) { return onPropertiesValueChange('vertexY1', args); }
    });
    Y2PositionObj.appendTo("#Y2position");

    //Properties of comment panel
    var authorNameObj = new ej.inputs.TextBox({
        value: selectedAnnotation.author,
        change: function (args) { return onPropertiesValueChange('author', args); }
    });
    authorNameObj.appendTo("#authorName");

    var commentObj = new ej.inputs.TextBox({
        value: selectedAnnotation.comment,
        change: function (args) { return onPropertiesValueChange('comment', args); },
        placeholder : "New Comment",
        focus : function(e) { e.event.target.placeholder = "" ; },
        blur : function(e) {if(e.value === "") {e.event.target.placeholder = "New Comment"; }}
    });
    commentObj.appendTo("#comment");

    var statusObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.state,
        change: function (args) { return onPropertiesValueChange('state', args); }
    });
    statusObj.appendTo("#status");

    var replyCheckBoxObj = new ej.buttons.CheckBox({
        checked: selectedAnnotation.isReply,
        change: function (args) { return onreplyCheckboxChecked(args); }
    });
    replyCheckBoxObj.appendTo("#replyCheckbox-isTrue");
    //ContextMenu model definition
    var menuOptions = {
        target: '#contextMenutarget',
        items: selectedAnnotation.replyMenuItems,
        select: function (args) { return contextMenuItemSelected(args); }
    };

    var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

    function contextMenuItemSelected(args) {
        switch (args.item.text) {
            case 'Edit':
                onReplyCommentEdit(currentEditCommentId);
                break;
            case 'Delete':
                onReplyCommentDelete(currentEditCommentId);
                break;
        }
    }

    function onreplyCheckboxChecked(args) {
        selectedAnnotation.isReply = args.checked;
        var divElement = document.getElementById('ischeckedReplybox');
        if (divElement) {
            if (args.checked) {
                divElement.style.display = 'block';
                document.getElementById("updateReplyButton").style.display = "none";
                document.getElementById("addreplyButton").style.display = "block";
            } else {
                divElement.style.display = 'none';
            }
        }
    }

    var replyAuthorNameObj = new ej.inputs.TextBox({
        value: selectedAnnotation.replyAuthor,
        change: function (args) { return onPropertiesValueChange('replyAuthor', args); }
    });
    replyAuthorNameObj.appendTo("#replyAuthorName");

    var replyCommentObj = new ej.inputs.TextBox({
        change: function (args) { return onPropertiesValueChange('replyComment', args); },
        placeholder: "Reply Comment"
    });
    replyCommentObj.appendTo("#replyComment");

    var replyStatusObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.replyState,
        change: function (args) { return onPropertiesValueChange('replyState', args); }
    });
    replyStatusObj.appendTo("#replyStatus");

    //Button components
    var addBoundsButtonObj = new ej.buttons.Button({ isPrimary: true });
    addBoundsButtonObj.appendTo("#addboundsbutton");

    var deleteBoundsButtonObj = new ej.buttons.Button({ isPrimary: true, cssClass: 'e-outline' });
    deleteBoundsButtonObj.appendTo("#deletebutton");

    var addVertexButtonObj = new ej.buttons.Button({ isPrimary: true });
    addVertexButtonObj.appendTo("#addVertexButton");

    var deleteVertexButtonObj = new ej.buttons.Button({ isPrimary: true, cssClass: 'e-outline' });
    deleteVertexButtonObj.appendTo("#vertexdelete");

    var addReplyButtonObj = new ej.buttons.Button({ isPrimary: true });
    addReplyButtonObj.appendTo("#addreplyButton");

    var updateReplyButtonObj = new ej.buttons.Button({ isPrimary: true });
    updateReplyButtonObj.appendTo("#updateReplyButton");

    var addAnnotationButtonObj = new ej.buttons.Button({ isPrimary: true, disabled: selectedAnnotation.annotationSelected });
    addAnnotationButtonObj.appendTo("#addAnnotationButton");

    var updateAnnotationButtonObj = new ej.buttons.Button({ isPrimary: true, disabled: selectedAnnotation.annotationUnSelected });
    updateAnnotationButtonObj.appendTo("#updateannotationButton");
    //Stamp type properties
    var stampTypeListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.stampsType,
        change: function (args) { return onPropertiesValueChange('stampsType', args); }
    });
    stampTypeListObj.appendTo("#stampTypeList");

    var dynamicStampListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.dynamicStamp,
        change: function (args) { return onPropertiesValueChange('dynamicStamp', args); }
    });
    dynamicStampListObj.appendTo("#dynamicstampList");

    var signHereStampListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.signHereStamp,
        change: function (args) { return onPropertiesValueChange('signHereStamp', args); }
    });
    signHereStampListObj.appendTo("#signHerestampList");

    var standardBusinessStampListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.standardBusinessStamp,
        change: function (args) { return onPropertiesValueChange('standardBusinessStamp', args); }
    });
    standardBusinessStampListObj.appendTo("#standardBussinessStampList");

    var inkAnnotationListObj = new ej.dropdowns.DropDownList({
        value: selectedAnnotation.inkAnnotation,
        change: function (args) { return onPropertiesValueChange('inkAnnotation', args); }
    });
    inkAnnotationListObj.appendTo("#inkAnnotationList");

    //function to update the property value on change
    function onPropertiesValueChange(property, event) {
        if (selectedAnnotation.hasOwnProperty(property)) {
            selectedAnnotation[property] = event.value;
            if (property === "stampsType") {
                findStampComments(event.itemData.text);
            }
            if ((property === "dynamicStamp" || property === "signHereStamp" || property === "standardBusinessStamp" || property === "stampsType") && selectedAnnotation.annotationUnSelected) {
                resetAnnotationProperties();
            }
        }
        if ((property != 'pageNumber' && property != 'replyAuthor' && property != 'replyComment' && property != 'replyState') && selectedAnnotation.annotationSelected && event.isInteracted) {
            updateAnnotationButtonObj.disabled = false;
        }
        if (property === 'thickness' && (annotationListObj.value === 'StickyNotes' || annotationListObj.value === 'Stamp' || annotationListObj.value === 'CustomStamp') && selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = true;
        }
        if ((property === 'x' || property === 'y') && (selectedAnnotation.annotationType === "Polygon" || selectedAnnotation.annotationType === "Area" || selectedAnnotation.annotationType === 'Volume' || selectedAnnotation.annotationType === 'Perimeter' || selectedAnnotation.annotationType === "Highlight" || selectedAnnotation.annotationType === "Underline" || selectedAnnotation.annotationType === "Strikethrough") && selectedAnnotation.annotationSelected && event.isInteracted) {
            updateAnnotationButtonObj.disabled = true;
        }
        if((property === 'width' || property === 'height') && selectedAnnotation.annotationSelected && event.isInteracted) {
            updateAnnotationButtonObj.disabled = true;
        }
    }

    function onColorChange(property, args) {
        if (selectedAnnotation.hasOwnProperty(property)) {
            selectedAnnotation[property] = args.currentValue.hex;
        }
        if (selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    }

    var selectedAnnotationId;
    function AnnotationSelectedEvent(args) {
        viewer.enableCommentPanel = true;
        selectedAnnotationId = args.annotationId;
        // Find the index of the annotation in the collection
        var index = -1;
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].annotationId === selectedAnnotationId) {
                index = i;
                break;
            }
        }

        // Ensure the annotation was found before proceeding
        if (index !== -1) {
            // Update properties to the panel
            updatePropertiesToPanel(viewer.annotationCollection[index]);
        }

        selectedAnnotation.annotationSelected = true;
        selectedAnnotation.annotationUnSelected = false;
        viewControl();
    }

    function AnnotationUnSelectedEvent(args) {
        viewer.enableCommentPanel = false;
        selectedAnnotation.annotationUnSelected = true;
        selectedAnnotation.annotationSelected = false;
        onAnnotationChange();
        viewControl();
    }

    function onAnnotationChange() {
        var currentSelectedAnnotation = annotationListObj.value;
        selectedAnnotation.annotationType = annotationListObj.value;
        switch (currentSelectedAnnotation) {
            case 'Highlight':
            case 'Underline':
            case 'Strikethrough':
                {
                    document.getElementById("strokethickenssIstrue").style.display = "none";
                    document.getElementById("deladdboundsButtonsIstrue").style.display = "block";
                    document.getElementById("colorFillerIstrue").style.display = "block";
                    document.getElementById("XYRowIstrue").style.display = "flex";
                    document.getElementById("heightwidthrowIstrue").style.display = "flex";
                    document.getElementById("X1Y1RowIstrue").style.display = "none";
                    document.getElementById("X2Y2RowIstrue").style.display = "none";
                    document.getElementById("lineIstrue").style.display = "none";
                    document.getElementById("polygonIstrue").style.display = "none";
                    document.getElementById("inkAnnotationIstrue").style.display = "none";
                    document.getElementById("stampClickedIStrue").style.display = "none";
                    document.getElementById("freeTextIstrue").style.display = "none";
                    document.getElementById("innerfreeTextIstrue").style.display = "none";
                    document.getElementById("fileUploaderIsTrue").style.display = "none";
                    selectedAnnotation.width = 100;
                    selectedAnnotation.height = 14;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.thickness = 1;
                    if (selectedAnnotation.annotationType === "Highlight") {
                        selectedAnnotation.fillColor = "#ffff00";
                    }
                    else if (selectedAnnotation.annotationType === "Underline") {
                        selectedAnnotation.fillColor = "#00ff00";
                    }
                    else if (selectedAnnotation.annotationType === "Strikethrough") {
                        selectedAnnotation.fillColor = "#ff0000";
                    }
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'Line':
            case 'Arrow':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "flex";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "block";
                    (document.getElementById("XYRowIstrue")).style.display = "none";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "none";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "flex";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "flex";
                    (document.getElementById("lineIstrue")).style.display = "block";
                    (document.getElementById("distanceIstrue")).style.display = "none";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    selectedAnnotation.vertexX0 = 100;
                    selectedAnnotation.vertexY0 = 100;
                    selectedAnnotation.vertexX1 = 100;
                    selectedAnnotation.vertexY1 = 100;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.thickness = 1;
                    selectedAnnotation.fillColor = "#00000000";
                    selectedAnnotation.strokeColor = "#ff0000";
                    if (selectedAnnotation.annotationType === "Arrow") {
                        selectedAnnotation.lineHeadStart = "Arrow";
                        selectedAnnotation.lineHeadEnd = "Arrow";
                    }
                    else {
                        selectedAnnotation.lineHeadStart = "None";
                        selectedAnnotation.lineHeadEnd = "None";
                    }
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'Rectangle':
            case 'Circle':
            case 'Radius':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "flex";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "block";
                    (document.getElementById("XYRowIstrue")).style.display = "flex";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "flex";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "none";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "none";
                    (document.getElementById("lineIstrue")).style.display = "none";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    selectedAnnotation.width = 100;
                    selectedAnnotation.height = 100;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.thickness = 1;
                    selectedAnnotation.fillColor = "#00000000";
                    selectedAnnotation.strokeColor = "#ff0000";
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'Polygon':
            case 'Perimeter':
            case 'Area':
            case 'Volume':
                {
                    (document.getElementById("polygonIstrue")).style.display = "block";
                    (document.getElementById("XYRowIstrue")).style.display = "flex";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "none";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "none";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "none";
                    (document.getElementById("strokethickenssIstrue")).style.display = "flex";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "block";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("lineIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    selectedAnnotation.width = 100;
                    selectedAnnotation.height = 100;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.thickness = 1;
                    selectedAnnotation.fillColor = "#00000000";
                    selectedAnnotation.strokeColor = "#ff0000";
                    selectedAnnotation.lineHeadEnd = "Arrow";
                    selectedAnnotation.lineHeadStart = "Arrow";
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'Distance':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "flex";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "block";
                    (document.getElementById("XYRowIstrue")).style.display = "none";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "none";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "flex";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "flex";
                    (document.getElementById("lineIstrue")).style.display = "block";
                    (document.getElementById("distanceIstrue")).style.display = "block";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    selectedAnnotation.vertexX0 = 100;
                    selectedAnnotation.vertexY0 = 100;
                    selectedAnnotation.vertexX1 = 200;
                    selectedAnnotation.vertexY1 = 100;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.thickness = 1;
                    selectedAnnotation.fillColor = "#00000000";
                    selectedAnnotation.strokeColor = "#ff0000";
                    selectedAnnotation.lineHeadStart = "Arrow";
                    selectedAnnotation.lineHeadEnd = "Arrow";
                    if (selectedAnnotation.vertexPoints.length) {
                        selectedAnnotation.vertexPoints.push({ x: selectedAnnotation.vertexX0, y: selectedAnnotation.vertexY0 }, { x: selectedAnnotation.vertexX1, y: selectedAnnotation.vertexY1 });
                    }
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'StickyNotes':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "none";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "none";
                    (document.getElementById("XYRowIstrue")).style.display = "flex";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "flex";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "none";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "none";
                    (document.getElementById("lineIstrue")).style.display = "none";
                    (document.getElementById("distanceIstrue")).style.display = "none";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    selectedAnnotation.width = 30;
                    selectedAnnotation.height = 30;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.author = "Guest";
                    selectedAnnotation.comment = "New Comment";
                    selectedAnnotation.thickness = 1;
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'Ink':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "flex";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "block";
                    (document.getElementById("XYRowIstrue")).style.display = "flex";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "flex";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "none";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "none";
                    (document.getElementById("lineIstrue")).style.display = "none";
                    (document.getElementById("distanceIstrue")).style.display = "none";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "block";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    selectedAnnotation.width = 150;
                    selectedAnnotation.height = 60;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.author = "Guest";
                    selectedAnnotation.comment = "New Comment";
                    selectedAnnotation.thickness = 1;
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'Stamp':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "none";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "none";
                    (document.getElementById("XYRowIstrue")).style.display = "flex";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "flex";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "none";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "none";
                    (document.getElementById("lineIstrue")).style.display = "none";
                    (document.getElementById("distanceIstrue")).style.display = "none";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "block";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    findStampComments(stampTypeListObj.value);
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'FreeText':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "flex";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "block";
                    (document.getElementById("XYRowIstrue")).style.display = "flex";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "flex";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "none";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "none";
                    (document.getElementById("lineIstrue")).style.display = "none";
                    (document.getElementById("distanceIstrue")).style.display = "none";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "block";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "block";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "none";
                    selectedAnnotation.width = 150;
                    selectedAnnotation.height = 26.5;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.thickness = 1;
                    selectedAnnotation.fillColor = "#00000000";
                    selectedAnnotation.strokeColor = "#00000000";
                    selectedAnnotation.defaultText = "Free text";
                    selectedAnnotation.fontFamily = "Helvetica";
                    selectedAnnotation.alignment = "Left";
                    selectedAnnotation.fontStyle = "None";
                    selectedAnnotation.author = "Guest";
                    selectedAnnotation.comment = "New Comment";
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
            case 'CustomStamp':
                {
                    (document.getElementById("strokethickenssIstrue")).style.display = "none";
                    (document.getElementById("deladdboundsButtonsIstrue")).style.display = "none";
                    (document.getElementById("colorFillerIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "block";
                    (document.getElementById("XYRowIstrue")).style.display = "flex";
                    (document.getElementById("heightwidthrowIstrue")).style.display = "flex";
                    (document.getElementById("X1Y1RowIstrue")).style.display = "none";
                    (document.getElementById("X2Y2RowIstrue")).style.display = "none";
                    (document.getElementById("lineIstrue")).style.display = "none";
                    (document.getElementById("distanceIstrue")).style.display = "none";
                    (document.getElementById("polygonIstrue")).style.display = "none";
                    (document.getElementById("inkAnnotationIstrue")).style.display = "none";
                    (document.getElementById("stampClickedIStrue")).style.display = "none";
                    (document.getElementById("freeTextIstrue")).style.display = "none";
                    (document.getElementById("innerfreeTextIstrue")).style.display = "none";
                    (document.getElementById("fileUploaderIsTrue")).style.display = "block";
                    selectedAnnotation.width = 100;
                    selectedAnnotation.height = 100;
                    selectedAnnotation.opacity = 100;
                    selectedAnnotation.author = "Guest";
                    selectedAnnotation.comment = "New Comment";
                    clearTable();
                    resetAnnotationProperties();
                    break;
                }
        }
    }

    function clearTable() {
        // Select the table body element by its ID
        var tableBody = document.getElementById('coordinate-table');

        // Check if the table body exists
        if (tableBody) {
            tableBody.innerHTML = ''; // Clear all rows
            tableBody.style.display = 'none'; // Hide the table after deletion
            indexValue = 0; // Reset the index value
        }
    }

    //Function for resetting the annotation properties
    function resetAnnotationProperties() {
        clearTable();
        selectedAnnotation.vertexPoints = [];
        selectedAnnotation.bounds = [];
        var shapeAnnotation = selectedAnnotation.annotationType;
        if (!selectedAnnotation.annotationSelected) {
            if (shapeAnnotation === "Arrow" || shapeAnnotation === "Distance") {
                selectedAnnotation.lineHeadStart = "Arrow";
                selectedAnnotation.lineHeadEnd = "Arrow";
                if (shapeAnnotation === "Distance") {
                    selectedAnnotation.leaderLength = 0;
                }
            }
            else if (shapeAnnotation === "Perimeter") {
                selectedAnnotation.lineHeadEnd = "OpenArrow";
                selectedAnnotation.lineHeadStart = "OpenArrow";
            }
            else {
                selectedAnnotation.lineHeadEnd = "None";
                selectedAnnotation.lineHeadStart = "None";
            }
            if (shapeAnnotation === "Rectangle" || shapeAnnotation === "Circle" || shapeAnnotation === "Radius") {
                selectedAnnotation.width = 100;
                selectedAnnotation.height = 100;
            }
            else if (shapeAnnotation === "Ink") {
                selectedAnnotation.width = 150;
                selectedAnnotation.height = 60;
                selectedAnnotation.fillColor = "ffffff00";
            }
            else if (shapeAnnotation === "FreeText") {
                selectedAnnotation.width = 150;
                selectedAnnotation.height = 26.5;
                selectedAnnotation.defaultText = "Free Text";
                selectedAnnotation.fontFamily = "Helvetica";
                selectedAnnotation.fontStyle = "None";
                selectedAnnotation.alignment = "Left";
                selectedAnnotation.fontSize = 16;
                selectedAnnotation.fontColor = "#000000";
            }
            else if (shapeAnnotation === "StickyNotes") {
                selectedAnnotation.width = 30;
                selectedAnnotation.height = 30;
            }
            else if (shapeAnnotation === "Stamp") {
                if (selectedAnnotation.stampsType === "Dynamic") {
                    findStampComments("Dynamic");
                    selectedAnnotation.width = 140;
                    selectedAnnotation.height = 55;
                }
                else if (selectedAnnotation.stampsType === "SignHere" || selectedAnnotation.stampsType === "Sign Here") {
                    findStampComments("Sign Here");
                    for (var i = 0; i < selectedAnnotation.signHereStampList.length; i++) {
                        var stamp = selectedAnnotation.signHereStampList[i];
                        if (stamp === selectedAnnotation.signHereStamp) {
                            switch (stamp) {
                                case "SignHere":
                                    {
                                        selectedAnnotation.width = 110;
                                        selectedAnnotation.height = 30;
                                        break;
                                    }
                                case "Witness":
                                    {
                                        selectedAnnotation.width = 130;
                                        selectedAnnotation.height = 30;
                                        break;
                                    }
                                case "InitialHere":
                                    {
                                        selectedAnnotation.width = 90;
                                        selectedAnnotation.height = 30;
                                        break;
                                    }
                                case "Accepted":
                                case "Rejected":
                                    {
                                        selectedAnnotation.width = 35;
                                        selectedAnnotation.height = 35;
                                        break;
                                    }
                                default:
                                    {
                                        selectedAnnotation.height = 30;
                                        break;
                                    }
                            }
                        }
                    }
                }
                else if (selectedAnnotation.stampsType === "Standard Business" || selectedAnnotation.stampsType === "StandardBusiness") {
                    findStampComments("Standard Business");
                    switch (selectedAnnotation.standardBusinessStamp) {
                        case "Final":
                        case "Draft":
                            {
                                selectedAnnotation.width = 110;
                                break;
                            }
                        case "Void":
                            {
                                selectedAnnotation.width = 100;
                                break;
                            }
                        default:
                            {
                                selectedAnnotation.width = 130;
                                break;
                            }
                    }
                    selectedAnnotation.height = 30;
                }
            }
            else if (shapeAnnotation === "CustomStamp") {
                selectedAnnotation.width = 100;
                selectedAnnotation.height = 100;
            }
            else if (shapeAnnotation === "Highlight" || shapeAnnotation === "Underline" || shapeAnnotation === "Strikethrough") {
                selectedAnnotation.width = 100;
                selectedAnnotation.height = 14;
            }
            else {
                selectedAnnotation.width = 0;
                selectedAnnotation.height = 0;
            }
            selectedAnnotation.x = 100;
            selectedAnnotation.y = 100;
            selectedAnnotation.author = "Guest";
            selectedAnnotation.comment = "";
            selectedAnnotation.state = "None";
            selectedAnnotation.isPrint = true;
            selectedAnnotation.isLocked = false;
            selectedAnnotation.isReply = false;
            document.getElementById('repliesContainer').style.display = "none";
            document.getElementById('ischeckedReplybox').style.display = "none";
            document.getElementById('allowinstractionsIstrue').style.display = "none";
            document.getElementById("coordinate-table").style.display = "none";
            document.getElementById('repliesList').style.display = "none";
            selectedAnnotation.allowedInteractions = ["None"];
            selectedAnnotation.strokeColor = "#FF0000";
            if (selectedAnnotation.annotationType === "FreeText") {
                selectedAnnotation.strokeColor = "#00000000";
            }
            selectedAnnotation.fillColor = "#00000000";
            if (selectedAnnotation.annotationType === "Highlight") {
                selectedAnnotation.fillColor = "#ffff00";
            }
            else if (selectedAnnotation.annotationType === "Underline") {
                selectedAnnotation.fillColor = "#00ff00";
            }
            else if (selectedAnnotation.annotationType === "Strikethrough") {
                selectedAnnotation.fillColor = "#ff0000";
            }
            selectedAnnotation.opacity = 100;
            selectedAnnotation.thickness = 1;
            selectedAnnotation.replyState = "None";
            selectedAnnotation.vertexPointCount = 0;
            selectedAnnotation.replyComment = "";
            replyCommentObj.value = "";
            replyCommentObj.placeholder = "Reply Comment";
            selectedAnnotation.replyAuthor = "Guest";
            selectedAnnotation.replyComments = [];
            selectedAnnotation.vertexPointCount = 0;
            if (shapeAnnotation === "Highlight" || shapeAnnotation === "Underline" || shapeAnnotation === "Strikethrough" || shapeAnnotation === "FreeText" || shapeAnnotation === "Polygon" || shapeAnnotation === "Volume" || shapeAnnotation === "Area" || shapeAnnotation === "Perimeter") {
                selectedAnnotation.x = 10;
                selectedAnnotation.y = 10;
            }
            selectedAnnotation.vertexX0 = 100;
            selectedAnnotation.vertexY0 = 100;
            selectedAnnotation.vertexX1 = 200;
            selectedAnnotation.vertexY1 = 100;
            selectedAnnotation.allowedInteractions = ["None"];
            commentObj.placeholder = "New Comment";
            uploadObj.clearAll();
        }
        //Binding pageNumber property
        pageNumberObj.value = selectedAnnotation.pageNumber;
        pageNumberObj.dataBind();
        //Binding the properties of properties panel
        XPositionObj.value = selectedAnnotation.x;
        XPositionObj.dataBind();
        YPositionObj.value = selectedAnnotation.y;
        YPositionObj.dataBind();
        widthObj.value = selectedAnnotation.width;
        widthObj.dataBind();
        heightObj.value = selectedAnnotation.height;
        heightObj.dataBind();
        fillColorPickerObj.value = selectedAnnotation.fillColor;
        fillColorPickerObj.dataBind();
        strokeColorPickerObj.value = selectedAnnotation.strokeColor;
        strokeColorPickerObj.dataBind();
        shapeOpacityObj.value = selectedAnnotation.opacity;
        shapeOpacityObj.dataBind();
        strokeThicknessObj.value = selectedAnnotation.thickness;
        strokeColorPickerObj.dataBind();
        if (shapeAnnotation === "Line" || shapeAnnotation === "Arrow" || shapeAnnotation === "Distance") {
            X1PositionObj.value = selectedAnnotation.vertexX0;
            X1PositionObj.dataBind();
            Y1PositionObj.value = selectedAnnotation.vertexY0;
            Y1PositionObj.dataBind();
            X2PositionObj.value = selectedAnnotation.vertexX1;
            X2PositionObj.dataBind();
            Y2PositionObj.value = selectedAnnotation.vertexY1;
            Y2PositionObj.dataBind();
            lineHeadStartListObj.value = selectedAnnotation.lineHeadStart;
            lineHeadStartListObj.dataBind();
            lineHeadEndListObj.value = selectedAnnotation.lineHeadEnd;
            lineHeadEndListObj.dataBind();
            if (shapeAnnotation === "Distance") {
                leaderLengthObj.value = selectedAnnotation.leaderLength;
                leaderLengthObj.dataBind();
            }
        }
        //Binding properties of comment panel
        authorNameObj.value = selectedAnnotation.author;
        authorNameObj.dataBind();
        commentObj.value = selectedAnnotation.comment;
        commentObj.dataBind();
        statusObj.value = selectedAnnotation.state;
        statusObj.dataBind();
        //Binding print and lock properties
        printAnnotationCheckBoxObj.checked = selectedAnnotation.isPrint;
        printAnnotationCheckBoxObj.dataBind();
        lockAnnotationCheckBoxObj.checked = selectedAnnotation.isLocked;
        lockAnnotationCheckBoxObj.dataBind();
        if (selectedAnnotation.isLocked) {
            allowedInteractionsListObj.value = selectedAnnotation.allowedInteractions;
            allowedInteractionsListObj.dataBind();
        }
        replyCheckBoxObj.checked = selectedAnnotation.isReply;
        replyCheckBoxObj.dataBind();
        //Binding properties of reply comments panel
        replyCheckBoxObj.checked = selectedAnnotation.isReply;
        replyCheckBoxObj.dataBind();
        replyAuthorNameObj.value = selectedAnnotation.replyAuthor;
        replyAuthorNameObj.dataBind();
        replyCommentObj.value = selectedAnnotation.replyComment;
        replyCommentObj.dataBind();
        replyStatusObj.value = selectedAnnotation.replyState;
        replyStatusObj.dataBind();
        
        //Binding properties for text properties panel 
        if (shapeAnnotation === "FreeText") {
            defaultTextObj.value = selectedAnnotation.defaultText;
            defaultTextObj.dataBind();
            fontFamilyListObj.value = selectedAnnotation.fontFamily;
            fontFamilyListObj.dataBind();
            textAlignmentListObj.value = selectedAnnotation.alignment;
            textAlignmentListObj.dataBind();
            fontStyleListObj.value = selectedAnnotation.fontStyle;
            fontStyleListObj.dataBind();
            fontSizeObj.value = selectedAnnotation.fontSize;
            fontSizeObj.dataBind();
            fontColorPickerObj.value = selectedAnnotation.fontColor;
            fontColorPickerObj.dataBind();
        }
    }

    function deleteVertex() {
        // Select the table body element by its ID
        var tableBody = document.getElementById('coordinate-table');

        // Check if the table body exists
        if (tableBody) {
            if(selectedAnnotation.vertexPoints.length > 1) {
                selectedAnnotation.vertexPoints.splice(selectedAnnotation.vertexPoints.length-1, 1);
            }
            generateTable();
            if(selectedAnnotation.annotationSelected) {
                updateAnnotationButtonObj.disabled = false;
            }
        }
    }

    function deleteBounds() {
        // Select the table body element by its ID
        var tableBody = document.getElementById('coordinate-table');

        // Check if the table body exists
        if (tableBody) {
            if(selectedAnnotation.bounds.length > 1){
                selectedAnnotation.bounds.splice(selectedAnnotation.bounds.length-1, 1);
            }
            generateTable();
        }
        if(selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    }

    document.getElementById("resetbutton").onclick = function () {
        resetAnnotationProperties();
    };

    //Function for adding new annotation
    addAnnotationButtonObj.element.onclick = function () {
        var currentAnnotationSettings = annotationSettings();
        switch (selectedAnnotation.annotationType) {
            case "Highlight":
            case "Underline":
            case "Strikethrough":
                {
                    viewer.annotation.addAnnotation(selectedAnnotation.annotationType, currentAnnotationSettings);
                    break;
                }
            case "Rectangle":
            case "Circle":
            case "StickyNotes":
            case "FreeText":
                {   
                    if(selectedAnnotation.annotationType === "FreeText") {
                        currentAnnotationSettings.borderColor = "";
                    }
                    viewer.annotation.addAnnotation(selectedAnnotation.annotationType, currentAnnotationSettings);
                    break;
                }
            case "Line":
            case "Arrow":
                {
                    if (selectedAnnotation.vertexPoints.length === 0) {
                        selectedAnnotation.vertexPoints.push({ x: selectedAnnotation.vertexX0, y: selectedAnnotation.vertexY0 },
                            { x: selectedAnnotation.vertexX1, y: selectedAnnotation.vertexY1 });
                    }
                    viewer.annotation.addAnnotation(selectedAnnotation.annotationType, currentAnnotationSettings);
                    selectedAnnotation.vertexPoints = [];
                    break;
                }
            case "Polygon":
            case "Perimeter":
            case "Area":
            case "Volume":
                {
                    if (selectedAnnotation.vertexPoints.length === 0) {
                        if (selectedAnnotation.annotationType === "Polygon") {
                            selectedAnnotation.vertexPoints.push({ x: 100, y: 39 }, { x: 142, y: 10 }, { x: 189, y: 38 }, { x: 178, y: 81 }, { x: 111, y: 81 }, { x: 100, y: 39 });
                        }
                        else if (selectedAnnotation.annotationType === "Perimeter") {
                            selectedAnnotation.vertexPoints.push({ x: 100, y: 100 }, { x: 185, y: 100 }, { x: 186, y: 162 });
                        }
                        else if (selectedAnnotation.annotationType === "Area") {
                            selectedAnnotation.vertexPoints.push({ x: 100, y: 100 }, { x: 188, y: 99 }, { x: 189, y: 153 }, { x: 100, y: 100 });
                        }
                        else if (selectedAnnotation.annotationType === "Volume") {
                            selectedAnnotation.vertexPoints.push({ x: 100, y: 100 }, { x: 100, y: 209 }, { x: 220, y: 209 }, { x: 220, y: 99 }, { x: 100, y: 100 });
                        }
                    }
                    viewer.annotation.addAnnotation(selectedAnnotation.annotationType, currentAnnotationSettings);
                    break;
                }
            case "Radius":
                {
                    if (selectedAnnotation.vertexPoints.length === 0) {
                        selectedAnnotation.vertexPoints.push({ x: 200, y: 500 }, { x: 250, y: 550 });
                    }
                    viewer.annotation.addAnnotation(selectedAnnotation.annotationType, currentAnnotationSettings);
                    break;
                }
            case "Distance":
                {
                    if (selectedAnnotation.vertexPoints.length === 0) {
                        selectedAnnotation.vertexPoints.push({ x: selectedAnnotation.vertexX0, y: selectedAnnotation.vertexY0 },
                            { x: selectedAnnotation.vertexX1, y: selectedAnnotation.vertexY1 });
                    }
                    currentAnnotationSettings.vertexPoints = selectedAnnotation.vertexPoints;
                    viewer.annotation.addAnnotation(selectedAnnotation.annotationType, currentAnnotationSettings);
                    break;
                }
            case "Ink":
                {
                    if (selectedAnnotation.inkAnnotation === "Syncfusion") {
                        selectedAnnotation.path = '[{\"command\":\"M\",\"x\":244.83334350585938,\"y\":982.0000305175781},{\"command\":\"L\",\"x\":244.83334350585938,\"y\":982.0000305175781},{\"command\":\"L\",\"x\":250.83334350585938,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":946.0000305175781},{\"command\":\"L\",\"x\":254.16668701171875,\"y\":940.6667175292969},{\"command\":\"L\",\"x\":256.8333435058594,\"y\":931.3333435058594},{\"command\":\"L\",\"x\":257.5,\"y\":929.3333435058594},{\"command\":\"L\",\"x\":258.8333435058594,\"y\":926.6667175292969},{\"command\":\"L\",\"x\":259.5,\"y\":924.0000305175781},{\"command\":\"L\",\"x\":259.5,\"y\":922.6667175292969},{\"command\":\"L\",\"x\":258.8333435058594,\"y\":922.0000305175781},{\"command\":\"L\",\"x\":258.16668701171875,\"y\":922.0000305175781},{\"command\":\"L\",\"x\":256.8333435058594,\"y\":922.0000305175781},{\"command\":\"L\",\"x\":256.16668701171875,\"y\":922.6667175292969},{\"command\":\"L\",\"x\":254.83334350585938,\"y\":923.3333435058594},{\"command\":\"L\",\"x\":254.16668701171875,\"y\":923.3333435058594},{\"command\":\"L\",\"x\":253.5,\"y\":923.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":925.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":927.3333435058594},{\"command\":\"L\",\"x\":252.83334350585938,\"y\":936.0000305175781},{\"command\":\"L\",\"x\":253.5,\"y\":940.6667175292969},{\"command\":\"L\",\"x\":254.83334350585938,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":260.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":264.16668701171875,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":274.16668701171875,\"y\":958.6667175292969},{\"command\":\"L\",\"x\":278.16668701171875,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":281.5,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":285.5,\"y\":964.6667175292969},{\"command\":\"L\",\"x\":286.8333740234375,\"y\":967.3333435058594},{\"command\":\"L\",\"x\":286.8333740234375,\"y\":970.0000305175781},{\"command\":\"L\",\"x\":282.8333740234375,\"y\":978.6667175292969},{\"command\":\"L\",\"x\":278.16668701171875,\"y\":983.3333435058594},{\"command\":\"L\",\"x\":266.16668701171875,\"y\":991.3333435058594},{\"command\":\"L\",\"x\":259.5,\"y\":993.3333435058594},{\"command\":\"L\",\"x\":252.16668701171875,\"y\":994.0000305175781},{\"command\":\"L\",\"x\":240.83334350585938,\"y\":991.3333435058594},{\"command\":\"L\",\"x\":236.16668701171875,\"y\":988.6667175292969},{\"command\":\"L\",\"x\":230.16668701171875,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":228.83334350585938,\"y\":980.6667175292969},{\"command\":\"L\",\"x\":228.16668701171875,\"y\":978.6667175292969},{\"command\":\"L\",\"x\":228.83334350585938,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":230.16668701171875,\"y\":973.3333435058594},{\"command\":\"L\",\"x\":236.16668701171875,\"y\":971.3333435058594},{\"command\":\"L\",\"x\":240.83334350585938,\"y\":971.3333435058594},{\"command\":\"L\",\"x\":246.16668701171875,\"y\":972.0000305175781},{\"command\":\"L\",\"x\":257.5,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":262.8333435058594,\"y\":976.0000305175781},{\"command\":\"L\",\"x\":269.5,\"y\":977.3333435058594},{\"command\":\"L\",\"x\":276.16668701171875,\"y\":978.6667175292969},{\"command\":\"L\",\"x\":279.5,\"y\":978.0000305175781},{\"command\":\"L\",\"x\":285.5,\"y\":976.6667175292969},{\"command\":\"L\",\"x\":288.16668701171875,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":292.8333740234375,\"y\":969.3333435058594},{\"command\":\"L\",\"x\":293.5,\"y\":966.6667175292969},{\"command\":\"L\",\"x\":294.16668701171875,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":293.5,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":293.5,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":292.8333740234375,\"y\":956.6667175292969},{\"command\":\"L\",\"x\":291.5,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":291.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":291.5,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":291.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":292.16668701171875,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":292.8333740234375,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":294.16668701171875,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":295.5,\"y\":964.6667175292969},{\"command\":\"L\",\"x\":297.5,\"y\":969.3333435058594},{\"command\":\"L\",\"x\":298.8333740234375,\"y\":970.6667175292969},{\"command\":\"L\",\"x\":301.5,\"y\":970.0000305175781},{\"command\":\"L\",\"x\":304.16668701171875,\"y\":968.6667175292969},{\"command\":\"L\",\"x\":305.5,\"y\":966.0000305175781},{\"command\":\"L\",\"x\":308.8333740234375,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":310.16668701171875,\"y\":957.3333435058594},{\"command\":\"L\",\"x\":310.8333740234375,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":310.8333740234375,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":310.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":311.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":312.8333740234375,\"y\":959.3333435058594},{\"command\":\"L\",\"x\":316.16668701171875,\"y\":968.0000305175781},{\"command\":\"L\",\"x\":317.5,\"y\":972.6667175292969},{\"command\":\"L\",\"x\":318.16668701171875,\"y\":977.3333435058594},{\"command\":\"L\",\"x\":319.5,\"y\":983.3333435058594},{\"command\":\"L\",\"x\":319.5,\"y\":986.0000305175781},{\"command\":\"L\",\"x\":319.5,\"y\":988.0000305175781},{\"command\":\"L\",\"x\":318.8333740234375,\"y\":988.0000305175781},{\"command\":\"L\",\"x\":318.16668701171875,\"y\":988.6667175292969},{\"command\":\"L\",\"x\":316.16668701171875,\"y\":987.3333435058594},{\"command\":\"L\",\"x\":314.8333740234375,\"y\":985.3333435058594},{\"command\":\"L\",\"x\":314.16668701171875,\"y\":980.6667175292969},{\"command\":\"L\",\"x\":314.8333740234375,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":316.16668701171875,\"y\":969.3333435058594},{\"command\":\"L\",\"x\":319.5,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":320.16668701171875,\"y\":957.3333435058594},{\"command\":\"L\",\"x\":321.5,\"y\":955.3333435058594},{\"command\":\"L\",\"x\":322.16668701171875,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":322.8333740234375,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":324.16668701171875,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":324.8333740234375,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":326.8333740234375,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":328.16668701171875,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":328.8333740234375,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":329.5,\"y\":962.0000305175781},{\"command\":\"L\",\"x\":330.16668701171875,\"y\":962.0000305175781},{\"command\":\"L\",\"x\":330.16668701171875,\"y\":962.6667175292969},{\"command\":\"L\",\"x\":330.16668701171875,\"y\":962.0000305175781},{\"command\":\"L\",\"x\":330.8333740234375,\"y\":960.0000305175781},{\"command\":\"L\",\"x\":331.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":332.8333740234375,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":333.5,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":334.8333740234375,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":335.5,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":336.16668701171875,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":337.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":338.8333740234375,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":340.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":341.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":342.8333740234375,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":344.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":346.8333740234375,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":349.5,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":350.8333740234375,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":351.5,\"y\":946.6667175292969},{\"command\":\"L\",\"x\":352.8333740234375,\"y\":944.0000305175781},{\"command\":\"L\",\"x\":352.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":354.8333740234375,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":354.8333740234375,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":946.6667175292969},{\"command\":\"L\",\"x\":354.16668701171875,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":355.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":356.16668701171875,\"y\":957.3333435058594},{\"command\":\"L\",\"x\":358.16668701171875,\"y\":959.3333435058594},{\"command\":\"L\",\"x\":360.16668701171875,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":364.16668701171875,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":370.8333740234375,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":373.5,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":375.5,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":376.16668701171875,\"y\":933.3333435058594},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":931.3333435058594},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":930.0000305175781},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":929.3333435058594},{\"command\":\"L\",\"x\":376.16668701171875,\"y\":930.0000305175781},{\"command\":\"L\",\"x\":375.5,\"y\":932.0000305175781},{\"command\":\"L\",\"x\":375.5,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":374.8333740234375,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":374.8333740234375,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":375.5,\"y\":966.0000305175781},{\"command\":\"L\",\"x\":377.5,\"y\":974.6667175292969},{\"command\":\"L\",\"x\":378.16668701171875,\"y\":977.3333435058594},{\"command\":\"L\",\"x\":380.8333740234375,\"y\":981.3333435058594},{\"command\":\"L\",\"x\":382.16668701171875,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":383.5,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":387.5,\"y\":982.6667175292969},{\"command\":\"L\",\"x\":389.5,\"y\":980.6667175292969},{\"command\":\"L\",\"x\":392.16668701171875,\"y\":976.6667175292969},{\"command\":\"L\",\"x\":392.8333740234375,\"y\":973.3333435058594},{\"command\":\"L\",\"x\":392.16668701171875,\"y\":970.0000305175781},{\"command\":\"L\",\"x\":388.8333740234375,\"y\":965.3333435058594},{\"command\":\"L\",\"x\":385.5,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":382.8333740234375,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":377.5,\"y\":964.0000305175781},{\"command\":\"L\",\"x\":375.5,\"y\":964.6667175292969},{\"command\":\"L\",\"x\":373.5,\"y\":965.3333435058594},{\"command\":\"L\",\"x\":374.8333740234375,\"y\":963.3333435058594},{\"command\":\"L\",\"x\":376.8333740234375,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":382.16668701171875,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":384.16668701171875,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":387.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":388.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":388.16668701171875,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":388.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":388.8333740234375,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":389.5,\"y\":959.3333435058594},{\"command\":\"L\",\"x\":389.5,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":390.16668701171875,\"y\":961.3333435058594},{\"command\":\"L\",\"x\":390.8333740234375,\"y\":960.6667175292969},{\"command\":\"L\",\"x\":393.5,\"y\":958.0000305175781},{\"command\":\"L\",\"x\":396.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":398.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":400.16668701171875,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":400.16668701171875,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":400.8333740234375,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":400.8333740234375,\"y\":947.3333435058594},{\"command\":\"L\",\"x\":401.5,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":402.16668701171875,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":403.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":404.8333740234375,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":406.16668701171875,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":407.5,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":410.16668701171875,\"y\":952.0000305175781},{\"command\":\"L\",\"x\":412.16668701171875,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":940.6667175292969},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":414.16668701171875,\"y\":938.0000305175781},{\"command\":\"L\",\"x\":415.5,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":418.8333740234375,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":420.16668701171875,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":421.5,\"y\":946.6667175292969},{\"command\":\"L\",\"x\":422.8333740234375,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":423.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":423.5,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":422.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":421.5,\"y\":955.3333435058594},{\"command\":\"L\",\"x\":421.5,\"y\":956.0000305175781},{\"command\":\"L\",\"x\":422.16668701171875,\"y\":954.6667175292969},{\"command\":\"L\",\"x\":422.8333740234375,\"y\":954.0000305175781},{\"command\":\"L\",\"x\":424.8333740234375,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":425.5,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":428.16668701171875,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":948.0000305175781},{\"command\":\"L\",\"x\":428.8333740234375,\"y\":950.0000305175781},{\"command\":\"L\",\"x\":429.5,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":430.16668701171875,\"y\":953.3333435058594},{\"command\":\"L\",\"x\":432.8333740234375,\"y\":952.6667175292969},{\"command\":\"L\",\"x\":434.8333740234375,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":437.5,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":440.16668701171875,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":441.5,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":442.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":941.3333435058594},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":442.8333740234375,\"y\":946.0000305175781},{\"command\":\"L\",\"x\":443.5,\"y\":949.3333435058594},{\"command\":\"L\",\"x\":444.16668701171875,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":445.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":447.5,\"y\":950.6667175292969},{\"command\":\"L\",\"x\":450.16668701171875,\"y\":948.6667175292969},{\"command\":\"L\",\"x\":452.16668701171875,\"y\":945.3333435058594},{\"command\":\"L\",\"x\":453.5,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":452.8333740234375,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":452.16668701171875,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":450.8333740234375,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":448.8333740234375,\"y\":936.0000305175781},{\"command\":\"L\",\"x\":447.5,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":446.16668701171875,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":445.5,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":445.5,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":446.16668701171875,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":446.8333740234375,\"y\":939.3333435058594},{\"command\":\"L\",\"x\":452.16668701171875,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":454.8333740234375,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":456.8333740234375,\"y\":936.0000305175781},{\"command\":\"L\",\"x\":459.5,\"y\":936.6667175292969},{\"command\":\"L\",\"x\":460.8333740234375,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":461.5,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":942.0000305175781},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":944.0000305175781},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":942.6667175292969},{\"command\":\"L\",\"x\":462.16668701171875,\"y\":941.3333435058594},{\"command\":\"L\",\"x\":462.8333740234375,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":464.16668701171875,\"y\":935.3333435058594},{\"command\":\"L\",\"x\":465.5,\"y\":933.3333435058594},{\"command\":\"L\",\"x\":466.16668701171875,\"y\":932.6667175292969},{\"command\":\"L\",\"x\":467.5,\"y\":933.3333435058594},{\"command\":\"L\",\"x\":469.5,\"y\":935.3333435058594},{\"command\":\"L\",\"x\":470.16668701171875,\"y\":938.6667175292969},{\"command\":\"L\",\"x\":472.8333740234375,\"y\":943.3333435058594},{\"command\":\"L\",\"x\":472.8333740234375,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":474.16668701171875,\"y\":944.6667175292969},{\"command\":\"L\",\"x\":475.5,\"y\":944.0000305175781},{\"command\":\"L\",\"x\":478.16668701171875,\"y\":941.3333435058594},{\"command\":\"L\",\"x\":481.5,\"y\":937.3333435058594},{\"command\":\"L\",\"x\":484.8333740234375,\"y\":934.0000305175781},{\"command\":\"L\",\"x\":488.8333740234375,\"y\":929.3333435058594},{\"command\":\"L\",\"x\":489.5,\"y\":928.0000305175781}]';
                    }
                    else if (selectedAnnotation.inkAnnotation === "PdfViewer") {
                        selectedAnnotation.path = "M10,50 L10,65 M10,50 L25,50 L25,57.5 L10,57.5 M40, 50 L40, 65 M40, 50 L43, 50 L55, 55 L55, 60 L43, 65 L40, 65 M80, 50 L80, 65 M80, 50 L95, 50 M80, 57.5 L95, 57.5 M110, 50 L125, 65 L140, 50 M160, 50 L160, 65 M155, 50 L165, 50 M155, 65 L165, 65 M182, 50 L192, 65 L202, 50 L212, 65 L222, 50 M230, 50 L230, 65 M230, 50 L240, 50 M230, 57.5 L240, 57.5 M230, 65 L240, 65 M255, 50 L270, 65 L285, 50 M295, 50 L295, 65 M290, 50 L300, 50 M290, 65 L300, 65 M310, 50 L310, 65 M310, 50 L325, 50 M310, 57.5 L325, 57.5 M310, 65 L325, 65 M340, 50 L340, 65 M340, 50 L355, 50 L355, 57.5 L340, 57.5 M340, 57.5 L355, 65";
                    }
                    else if (selectedAnnotation.inkAnnotation === "Star") {
                        selectedAnnotation.path =  '[{\"command\":\"M\",\"x\":72,\"y\":200},{\"command\":\"L\",\"x\":79,\"y\":65},{\"command\":\"L\",\"x\":92,\"y\":200},{\"command\":\"L\",\"x\":65,\"y\":110},{\"command\":\"L\",\"x\":95,\"y\":110},{\"command\":\"L\",\"x\":72,\"y\":200}]';
                    }
                    currentAnnotationSettings.path = selectedAnnotation.path;
                    currentAnnotationSettings.isCommentLock = selectedAnnotation.isLocked;
                    viewer.annotation.addAnnotation(selectedAnnotation.annotationType, currentAnnotationSettings);
                    break;
                }

            case "Stamp":
                {
                    currentAnnotationSettings.customStamps = null;
                    var selectedStampItem;
                    if (stampTypeListObj.value === "Dynamic") {
                        selectedStampItem = dynamicStampMap[dynamicStampListObj.value];
                        viewer.annotation.addAnnotation("Stamp", currentAnnotationSettings, selectedStampItem);
                    } else if (stampTypeListObj.value === "SignHere") {
                        selectedStampItem = signHereStampMap[signHereStampListObj.value];
                        viewer.annotation.addAnnotation("Stamp", currentAnnotationSettings, null, selectedStampItem);
                    } else {
                        selectedStampItem = standardBusinessStampMap[standardBusinessStampListObj.value];
                        viewer.annotation.addAnnotation("Stamp", currentAnnotationSettings, null, null, selectedStampItem);
                    }
                    break;
                }
            case "CustomStamp":
                {
                    viewer.annotation.addAnnotation("Stamp", currentAnnotationSettings);
                    uploadObj.clearAll();
                    break;
                }
        }
        var newAnnotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
        if (newAnnotation) {
            var updatedAnnotation = updateAnnotationComments(newAnnotation);
            viewer.annotation.editAnnotation(updatedAnnotation);
        }
        resetReplies();
    };
    
    //Function for updating the annotation properties on annotation settings
    var annotationSettings = function () {
        return ({
            offset: { x: selectedAnnotation.x, y: selectedAnnotation.y },
            pageNumber: selectedAnnotation.pageNumber,
            width: selectedAnnotation.width,
            height: selectedAnnotation.height,
            opacity: Number(selectedAnnotation.opacity) / 100,
            thickness: selectedAnnotation.thickness,
            strokeColor: selectedAnnotation.strokeColor,
            fillColor: selectedAnnotation.fillColor,
            bounds: [{ x: selectedAnnotation.x, y: selectedAnnotation.y, width: selectedAnnotation.width, height: selectedAnnotation.height }],
            vertexPoints: selectedAnnotation.vertexPoints,
            fontFamily: selectedAnnotation.fontFamily,
            fontStyle: fontStyleMap[selectedAnnotation.fontStyle],
            fontSize: selectedAnnotation.fontSize,
            defaultText: selectedAnnotation.defaultText,
            textAlignment: selectedAnnotation.alignment,
            author: selectedAnnotation.author,
            setState: selectedAnnotation.state,
            note: selectedAnnotation.comment,
            comments: selectedAnnotation.replyComments,
            replyAuthor: selectedAnnotation.replyAuthor,
            replyState: selectedAnnotation.replyState,
            replyComment: selectedAnnotation.replyComment,
            modifiedDate: selectedAnnotation.modifiedDate,
            replyModifiedDate: selectedAnnotation.replyModifiedDate,
            lineHeadStartStyle: viewer.annotation.getArrowString(selectedAnnotation.lineHeadStart),
            lineHeadEndStyle: viewer.annotation.getArrowString(selectedAnnotation.lineHeadEnd),
            leaderLength: selectedAnnotation.leaderLength,
            inkAnnotationType: selectedAnnotation.inkAnnotation,
            color: selectedAnnotation.fillColor,
            allowedInteractions: selectedAnnotation.allowedInteractions,
            dynamicStamps: selectedAnnotation.dynamicStamp,
            signStamps: selectedAnnotation.signHereStamp,
            standardBusinessStamps: selectedAnnotation.standardBusinessStamp,
            path: selectedAnnotation.path,
            fontColor: selectedAnnotation.fontColor,
            isPrint: selectedAnnotation.isPrint,
            isLock: selectedAnnotation.isLocked,
            borderColor: selectedAnnotation.strokeColor,
            customStamps: [{
                customStampImageSource: selectedAnnotation.customStampImageSource,
                customStampName: selectedAnnotation.customStampName,
            }]
        });
    };

    var fontStyleMap = {
        'None': ej.pdfviewer.FontStyle.None,
        'Bold': ej.pdfviewer.FontStyle.Bold,
        'Italic': ej.pdfviewer.FontStyle.Italic,
        'Strikethrough': ej.pdfviewer.FontStyle.Strikethrough,
        'Underline': ej.pdfviewer.FontStyle.Underline
    };

    var indexValue = 0;
    //function for adding bounds 
    function addBounds() {
        selectedAnnotation.bounds.push({ X: selectedAnnotation.x, Y: selectedAnnotation.y, Width: selectedAnnotation.width, Height: selectedAnnotation.height });
        generateTable();
        if (selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    }


    addBoundsButtonObj.element.onclick = function () { addBounds(); };
    deleteBoundsButtonObj.element.onclick = function () { deleteBounds(); };
    deleteVertexButtonObj.element.onclick = function () { deleteVertex(); };
    addVertexButtonObj.element.onclick = function () { addVertex(); };

    //function for adding vertex points
    function addVertex() {
        selectedAnnotation.vertexPoints.push({ x: selectedAnnotation.x, y: selectedAnnotation.y });
        generateTable();
        if (selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    }


    //Function to update selected annotation properties to property panel
    function updatePropertiesToPanel(collection) {
        selectedAnnotation.annotationType = collection.shapeAnnotationType;
        findStampComments("Null");
        //for updating annotation type
        if (collection.textMarkupAnnotationType === "Highlight" || collection.textMarkupAnnotationType === "Underline" || collection.textMarkupAnnotationType === "Strikethrough") {
            annotationListObj.value = collection.textMarkupAnnotationType;
            selectedAnnotation.annotationType = collection.textMarkupAnnotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "Square" || collection.shapeAnnotationType === "Rectangle") {
            selectedAnnotation.annotationType = "Rectangle";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "Circle" && collection.subject === "Circle" && collection.indent !== "PolygonRadius") {
            selectedAnnotation.annotationType = "Circle";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "Polygon" && collection.subject === "Polygon") {
            if (collection.indent === "PolygonVolume") {
                selectedAnnotation.annotationType = "Volume";
            }
            else if (collection.indent === "PolygonDimension") {
                selectedAnnotation.annotationType = "Area";
            }
            else {
                selectedAnnotation.annotationType = "Polygon";
            }
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "Line" && collection.subject === "Line" && collection.indent !== "LineDimension") {
            selectedAnnotation.annotationType = "Line";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "Line" && collection.subject === "Arrow") {
            selectedAnnotation.annotationType = "Arrow";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "sticky") {
            selectedAnnotation.annotationType = "StickyNotes";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "FreeText") {
            selectedAnnotation.annotationType = "FreeText";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "Ink") {
            selectedAnnotation.annotationType = "Ink";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "Line" || collection.shapeAnnotationType === "Polyline" || collection.shapeAnnotationType === "Square" || collection.shapeAnnotationType === "Circle" || collection.shapeAnnotationType === "Polygon" && collection.indent) {
            if (collection.indent === "LineDimension") {
                selectedAnnotation.annotationType = "Distance";
                annotationListObj.value = selectedAnnotation.annotationType;
                annotationListObj.dataBind();
            }
            else if (collection.indent === "PolyLineDimension") {
                selectedAnnotation.annotationType = "Perimeter";
                annotationListObj.value = selectedAnnotation.annotationType;
                annotationListObj.dataBind();
            }
            else if (collection.indent === "PolyLineDimension" && collection.subject === "Arrow") {
                selectedAnnotation.annotationType = "Arrow";
                annotationListObj.value = selectedAnnotation.annotationType;
                annotationListObj.dataBind();
            }
            else if (collection.indent === "PolygonDimension") {
                selectedAnnotation.annotationType = "Area";
                annotationListObj.value = selectedAnnotation.annotationType;
                annotationListObj.dataBind();
            }
            else if (collection.indent === "PolygonRadius") {
                selectedAnnotation.annotationType = "Radius";
                annotationListObj.value = selectedAnnotation.annotationType;
                annotationListObj.dataBind();
            }
            else if (collection.indent === "PolygonVolume") {
                selectedAnnotation.annotationType = "Volume";
                annotationListObj.value = selectedAnnotation.annotationType;
                annotationListObj.dataBind();
            }
        }
        else if (collection.shapeAnnotationType === "stamp" && collection.stampAnnotationType === "image") {
            selectedAnnotation.annotationType = "CustomStamp";
            annotationListObj.value = selectedAnnotation.annotationType;
            annotationListObj.dataBind();
        }
        else if (collection.shapeAnnotationType === "stamp" && collection.stampAnnotationType === "path") {
            annotationListObj.value = "Stamp";
            selectedAnnotation.annotationType = "stamp";
            annotationListObj.dataBind();
            if (collection.isDynamicStamp === true) {
                findStampComments("Dynamic");
                selectedAnnotation.stampsType = "Dynamic";
                stampTypeListObj.value = "Dynamic";
                stampTypeListObj.dataBind();
                dynamicStampListObj.value = collection.subject;
                dynamicStampListObj.dataBind();
            }
            else if (collection.subject === "Accepted" || collection.subject === "InitialHere" || collection.subject === "Rejected" || collection.subject === "SignHere" || collection.subject === "Witness") {
                findStampComments("Sign Here");
                selectedAnnotation.stampsType = "Sign Here";
                stampTypeListObj.value = "SignHere";
                stampTypeListObj.dataBind();
                signHereStampListObj.value = collection.subject;
                signHereStampListObj.dataBind();
            }
            else {
                findStampComments("Standard Business");
                selectedAnnotation.stampsType = "Standard Business";
                stampTypeListObj.value = "StandardBusiness";
                stampTypeListObj.dataBind();
                standardBusinessStampListObj.value = collection.subject;
                standardBusinessStampListObj.dataBind();
            }
        }
        else {
            selectedAnnotation.annotationType = collection.shapeAnnotationType;
        }
        selectedAnnotation.pageNumber = collection.pageNumber + 1;
        pageNumberObj.value = collection.pageNumber + 1;
        pageNumberObj.dataBind();
        //for updating annotation properties
        if (selectedAnnotation.annotationType === "Highlight" || selectedAnnotation.annotationType === "Underline" || selectedAnnotation.annotationType === "Strikethrough" && (collection.annotationAddMode === "Imported Annotation" || collection.annotationAddMode === "Existing Annotation")) {
            selectedAnnotation.width = collection.bounds[0].Width;
            widthObj.value = selectedAnnotation.width;
            widthObj.dataBind();
            selectedAnnotation.height = collection.bounds[0].Height;
            heightObj.value = selectedAnnotation.height;
            heightObj.dataBind();
            selectedAnnotation.x = collection.bounds[0].X;
            XPositionObj.value = selectedAnnotation.x;
            XPositionObj.dataBind();
            selectedAnnotation.y = collection.bounds[0].Y;
            YPositionObj.value = selectedAnnotation.y;
            YPositionObj.dataBind();
        }
        else if (selectedAnnotation.annotationType === "Highlight" || selectedAnnotation.annotationType === "Underline" || selectedAnnotation.annotationType === "Strikethrough" && (collection.annotationAddMode === "UI Drawn Annotation")) {
            selectedAnnotation.width = collection.bounds[0].width;
            widthObj.value = collection.bounds[0].width;
            widthObj.dataBind();
            selectedAnnotation.height = collection.bounds[0].height;
            heightObj.value = collection.bounds[0].height;
            heightObj.dataBind();
            selectedAnnotation.x = collection.bounds[0].left;
            XPositionObj.value = collection.bounds[0].left;
            XPositionObj.dataBind();
            selectedAnnotation.y = collection.bounds[0].right;
            YPositionObj.value = collection.bounds[0].right;
            YPositionObj.dataBind();
        }
        else if (selectedAnnotation.annotationType === "FreeText") {
            //for updating the property panel
            selectedAnnotation.width = collection.bounds.width;
            widthObj.value = collection.bounds.width;
            widthObj.dataBind();
            selectedAnnotation.height = collection.bounds.height;
            heightObj.value = collection.bounds.height;
            heightObj.dataBind();
            selectedAnnotation.x = collection.bounds.x ? collection.bounds.x : collection.bounds.left;
            XPositionObj.value = collection.bounds.x ? collection.bounds.x : collection.bounds.left;
            XPositionObj.dataBind();
            selectedAnnotation.y = collection.bounds.y ? collection.bounds.y : collection.bounds.top;
            YPositionObj.value = collection.bounds.y ? collection.bounds.y : collection.bounds.top;
            YPositionObj.dataBind();
            selectedAnnotation.defaultText = collection.dynamicText;
            defaultTextObj.value = collection.dynamicText;
            defaultTextObj.dataBind();
            selectedAnnotation.alignment = collection.textAlign;
            textAlignmentListObj.value = collection.textAlign;
            textAlignmentListObj.dataBind();
            selectedAnnotation.fontFamily = collection.fontFamily;
            fontFamilyListObj.value = collection.fontFamily;
            fontFamilyListObj.dataBind();
            if (collection.font.isBold) {
                selectedAnnotation.fontStyle = "Bold";
            }
            else if (collection.font.isItalic) {
                selectedAnnotation.fontStyle = "Italic";
            }
            else if (collection.font.isStrikeout) {
                selectedAnnotation.fontStyle = "Strikethrough";
            }
            else if (collection.font.isUnderline) {
                selectedAnnotation.fontStyle = "Underline";
            }
            else {
                selectedAnnotation.fontStyle = "None";
            }
            fontStyleListObj.value = selectedAnnotation.fontStyle;
            fontStyleListObj.dataBind();
            selectedAnnotation.fontSize = collection.fontSize;
            fontSizeObj.value = collection.fontSize;
            fontSizeObj.dataBind();
            selectedAnnotation.fontColor = collection.fontColor ? (collection.fontColor.includes("rgba") ? rgbaStringToHex(collection.fontColor) : collection.fontColor) : "";
            fontColorPickerObj.value = collection.fontColor ? (collection.fontColor.includes("rgba") ? rgbaStringToHex(collection.fontColor) : collection.fontColor) : "";
            fontColorPickerObj.dataBind();
        }
        else if (selectedAnnotation.annotationType === "Line" || selectedAnnotation.annotationType === "Arrow" || selectedAnnotation.annotationType === "Distance") {
            selectedAnnotation.vertexX0 = collection.vertexPoints[0].x;
            X1PositionObj.value = collection.vertexPoints[0].x;
            X1PositionObj.dataBind();
            selectedAnnotation.vertexY0 = collection.vertexPoints[0].y;
            Y1PositionObj.value = collection.vertexPoints[0].y;
            Y1PositionObj.dataBind();
            selectedAnnotation.vertexX1 = collection.vertexPoints[1].x;
            X2PositionObj.value = collection.vertexPoints[1].x;
            X2PositionObj.dataBind();
            selectedAnnotation.vertexY1 = collection.vertexPoints[1].y;
            Y2PositionObj.value = collection.vertexPoints[1].y;
            Y2PositionObj.dataBind();
            if (collection.lineHeadStartStyle && collection.lineHeadEndStyle) {
                selectedAnnotation.lineHeadStart = collection.lineHeadStartStyle;
                selectedAnnotation.lineHeadEnd = collection.lineHeadEndStyle;
            }
            else if (collection.lineHeadStart && collection.lineHeadEnd) {
                selectedAnnotation.lineHeadStart = viewer.annotation.getArrowType(collection.lineHeadStart);
                selectedAnnotation.lineHeadEnd = viewer.annotation.getArrowType(collection.lineHeadEnd);
            }
            // selectedAnnotation.lineHeadStart = collection.lineHeadStart;
            lineHeadStartListObj.value = viewer.annotation.getArrowType(collection.lineHeadStart);
            lineHeadStartListObj.dataBind();
            // selectedAnnotation.lineHeadStart = collection.lineHeadEnd;
            lineHeadEndListObj.value = viewer.annotation.getArrowType(collection.lineHeadEnd);
            lineHeadEndListObj.dataBind();
            if (selectedAnnotation.annotationType === "Distance") {
                selectedAnnotation.leaderLength = collection.leaderLength;
                leaderLengthObj.value = collection.leaderLength;
                leaderLengthObj.dataBind();
            }
        }
        else if (selectedAnnotation.annotationType === "Ink") {
            selectedAnnotation.width = collection.bounds.width;
            widthObj.value = collection.bounds.width;
            widthObj.dataBind();
            selectedAnnotation.height = collection.bounds.height;
            heightObj.value = collection.bounds.height;
            heightObj.dataBind();
            selectedAnnotation.x = collection.bounds.x;
            XPositionObj.value = collection.bounds.x;
            XPositionObj.dataBind();
            selectedAnnotation.y = collection.bounds.y;
            YPositionObj.value = collection.bounds.y;
            YPositionObj.dataBind();
        }
        else {
            selectedAnnotation.width = collection.bounds.width;
            widthObj.value = collection.bounds.width;
            widthObj.dataBind();
            selectedAnnotation.height = collection.bounds.height;
            heightObj.value = collection.bounds.height;
            heightObj.dataBind();
            //binding values to x and y positions
            selectedAnnotation.x = collection.bounds.x ? collection.bounds.x : collection.bounds.left;
            selectedAnnotation.y = collection.bounds.y ? collection.bounds.y : collection.bounds.top;
            if (selectedAnnotation.annotationType === "Polygon" || selectedAnnotation.annotationType === "Perimeter" || selectedAnnotation.annotationType === "Area" || selectedAnnotation.annotationType === "Volume") {
                selectedAnnotation.x = collection.vertexPoints[0].x;
                selectedAnnotation.y = collection.vertexPoints[0].y;
            }
            XPositionObj.value = selectedAnnotation.x;
            XPositionObj.dataBind();
            YPositionObj.value = selectedAnnotation.y;
            YPositionObj.dataBind();
        }

        if (selectedAnnotation.annotationType === "Line" || selectedAnnotation.annotationType === "Arrow" || selectedAnnotation.annotationType === "Polygon" || selectedAnnotation.annotationType === "Perimeter" || selectedAnnotation.annotationType === "Area" || selectedAnnotation.annotationType === "Volume" || selectedAnnotation.annotationType === "Radius" || selectedAnnotation.annotationType === "Distance") {
            selectedAnnotation.vertexPoints = collection.vertexPoints;
            if (selectedAnnotation.annotationType != "Distance" && selectedAnnotation.annotationType != "Line" && selectedAnnotation.annotationType != "Arrow" && selectedAnnotation.annotationType != "Radius") {
                //showVertex();
                generateTable();
            }
        }
        else if (selectedAnnotation.annotationType === "Highlight" || selectedAnnotation.annotationType === "Underline" || selectedAnnotation.annotationType === "Strikethrough") {
            selectedAnnotation.bounds = collection.bounds;
            //showBounds();
            generateTable();
        }
        selectedAnnotation.opacity = parseInt(collection.opacity * 100, 10);
        shapeOpacityObj.value = selectedAnnotation.opacity;
        shapeOpacityObj.dataBind();
        selectedAnnotation.thickness = collection.thickness;
        strokeThicknessObj.value = collection.thickness;
        strokeThicknessObj.dataBind();
        if(collection.strokeColor === "rgba(255,255,255,1)" && selectedAnnotation.annotationType === "FreeText") {
            collection.strokeColor = "#00000000";
        }
        selectedAnnotation.strokeColor = collection.strokeColor ? (collection.strokeColor.includes("rgba") ? rgbaStringToHex(collection.strokeColor) : collection.strokeColor) : "";
        strokeColorPickerObj.value = selectedAnnotation.strokeColor;
        strokeColorPickerObj.dataBind();
        selectedAnnotation.isPrint = collection.isPrint;
        printAnnotationCheckBoxObj.checked = collection.isPrint;
        selectedAnnotation.isLocked = collection.isLocked;
        lockAnnotationCheckBoxObj.checked = collection.isLocked;
        lockAnnotationCheckBoxObj.dataBind();
        if (collection.isLocked) {
            document.getElementById('allowinstractionsIstrue').style.display = "block";
            selectedAnnotation.allowedInteractions = collection.allowedInteractions;
            allowedInteractionsListObj.value = collection.allowedInteractions;
            allowedInteractionsListObj.dataBind();
        }
        else {
            document.getElementById('allowinstractionsIstrue').style.display = "none";
            selectedAnnotation.allowedInteractions = collection.allowedInteractions;
        }
        if (selectedAnnotation.annotationType === "Highlight" || selectedAnnotation.annotationType === "Underline" || selectedAnnotation.annotationType === "Strikethrough") {
            selectedAnnotation.fillColor = collection.color ? (collection.color.includes("rgba") ? rgbaStringToHex(collection.color) : collection.color) : "";
            fillColorPickerObj.value = collection.color ? (collection.color.includes("rgba") ? rgbaStringToHex(collection.color) : collection.color) : "";
            fillColorPickerObj.dataBind();
        }
        else {
            if (selectedAnnotation.annotationType === "Ink" && !collection.fillColor) {
                collection.fillColor = "#ffffff00";
            }
            selectedAnnotation.fillColor = collection.fillColor ? (collection.fillColor.includes("rgba") ? rgbaStringToHex(collection.fillColor) : collection.fillColor) : "";
            fillColorPickerObj.value = collection.fillColor ? (collection.fillColor.includes("rgba") ? rgbaStringToHex(collection.fillColor) : collection.fillColor) : "";
            fillColorPickerObj.dataBind();

            selectedAnnotation.strokeColor = collection.strokeColor ? (collection.strokeColor.includes("rgba") ? rgbaStringToHex(collection.strokeColor) : collection.strokeColor) : "";
            strokeColorPickerObj.value = collection.strokeColor ? (collection.strokeColor.includes("rgba") ? rgbaStringToHex(collection.strokeColor) : collection.strokeColor) : "";
            strokeColorPickerObj.dataBind();
        }
        //for updating comments
        selectedAnnotation.author = collection.author;
        authorNameObj.value = collection.author;
        authorNameObj.dataBind();
        if (collection.note) {
            selectedAnnotation.comment = collection.note;
        }
        else {
            selectedAnnotation.comment = "";
        }
        commentObj.value = selectedAnnotation.comment;
        commentObj.placeholder = "";
        commentObj.dataBind();
        selectedAnnotation.state = collection.state;
        statusObj.value = collection.state;
        statusObj.dataBind();
        selectedAnnotation.replyComments = [];
        replyCommentObj.value = "";
        replyCommentObj.placeholder = "Reply Comment";
        if (collection.comments.length > 0) {
            for (var i = 0; i < collection.comments.length; i++) {
                var reply = new Comment();
                reply.id = collection.comments[i].annotName;
                reply.author = collection.comments[i].author;
                reply.note = collection.comments[i].note;
                reply.modifiedDate = formatCurrentDate(new Date(collection.comments[i].modifiedDate));
                reply.state = collection.comments[i].state;
                selectedAnnotation.replyComments.push(reply);
            }
        }
        if (collection.comments.length > 0) {
            selectedAnnotation.isReply = true;
            replyCheckBoxObj.checked = selectedAnnotation.isReply;
            replyAuthorNameObj.dataBind();
            displayReplies();
            document.getElementById('ischeckedReplybox').style.display = "block";
        }
        else {
            document.getElementById('repliesContainer').style.display = "none";
            document.getElementById('ischeckedReplybox').style.display = "none";
        }
    }

    //Creating file upload component for custom stamp
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        dropArea: dropElement,
        success: onFileSuccess,
        allowedExtensions: '.png, .jpg, .jpeg',
        template: function (args) {
            var template = '<span class="wrapper">' +
                '<img class="upload-image" id="uploadedImage" src="' + syncfusionLogo + '" />' +
                '<span class="name file-name" id="fileName">' + args.name + '</span>' +
                '<span class="e-icons e-file-delete-btn" id="removeIcon"></span>' +
                '</span>';
            return template;
        },
        beforeUpload: function (event) {
            var removeIcons = document.getElementById('removeIcon');
            if (removeIcons) {
                removeIcons.onclick = function () {
                    onFileRemove();
                };
            }
        },
        uploading: function (event) {
            document.getElementById('fileName').innerHTML = event.fileData.name;
        }
    });
    uploadObj.appendTo("#fileupload");

    var dropElement = document.getElementsByClassName('control-fluid')[0];

    function onFileRemove() {
        selectedAnnotation.customStampImageSource = syncfusionLogo;
        document.getElementById("uploadedImage").src = syncfusionLogo;
        uploadObj.remove();
    }

    function onFileSuccess(args) {
        var fileData = args.file.rawFile;
        if (fileData instanceof Blob) {
            convertBlobToBase64(fileData).then(function (base64String) {
                selectedAnnotation.customStampName = "Image";
                if(args.operation === "remove"){
                    selectedAnnotation.customStampImageSource = syncfusionLogo;
                }
                else{
                    selectedAnnotation.customStampImageSource = base64String;
                    document.getElementById('uploadedImage').src = base64String;
                    document.getElementById('fileName').innerHTML = args.file.name;
                }
            });     
        }
        else {
            console.error("Unexpected file data type:", typeof fileData);
        }
    }

    function convertBlobToBase64(blob) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    function rgbaStringToHex(rgba) {
        var rgbaRegex = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
        var match = rgba.match(rgbaRegex);
        if (match) {
            var r = parseInt(match[1], 10);
            var g = parseInt(match[2], 10);
            var b = parseInt(match[3], 10);
            var a = parseFloat(match[4]);
    
            // Convert to integer range [0, 255] for alpha
            var alpha = Math.round(a * 255);
            
            var redHex = ('0' + r.toString(16)).slice(-2);
            var greenHex = ('0' + g.toString(16)).slice(-2);
            var blueHex = ('0' + b.toString(16)).slice(-2);
            var alphaHex = ('0' + alpha.toString(16)).slice(-2);  // Fixing alpha conversion
    
            // If alpha is 255 (fully opaque), return only RGB
            if (a === 255) {
                return "#" + redHex + greenHex + blueHex;
            } else {
                return "#" + redHex + greenHex + blueHex + alphaHex;
            }
        } else {
            return null;
        }
    }
    
    var dynamicStampMap = {
        'Approved': ej.pdfviewer.DynamicStampItem.Approved,
        'Confidential': ej.pdfviewer.DynamicStampItem.Confidential,
        'NotApproved': ej.pdfviewer.DynamicStampItem.NotApproved,
        'Received': ej.pdfviewer.DynamicStampItem.Received,
        'Reviewed': ej.pdfviewer.DynamicStampItem.Reviewed,
        'Revised': ej.pdfviewer.DynamicStampItem.Revised
    };

    var signHereStampMap = {
        'Accepted': ej.pdfviewer.SignStampItem.Accepted,
        'InitialHere': ej.pdfviewer.SignStampItem.InitialHere,
        'Rejected': ej.pdfviewer.SignStampItem.Rejected,
        'SignHere': ej.pdfviewer.SignStampItem.SignHere,
        'Witness': ej.pdfviewer.SignStampItem.Witness
    };

    var standardBusinessStampMap = {
        'Approved': ej.pdfviewer.StandardBusinessStampItem.Approved,
        'Completed': ej.pdfviewer.StandardBusinessStampItem.Completed,
        'Confidential': ej.pdfviewer.StandardBusinessStampItem.Confidential,
        'Draft': ej.pdfviewer.StandardBusinessStampItem.Draft,
        'Final': ej.pdfviewer.StandardBusinessStampItem.Final,
        'ForComment': ej.pdfviewer.StandardBusinessStampItem.ForComment,
        'NotForPublicRelease': ej.pdfviewer.StandardBusinessStampItem.NotForPublicRelease,
        'InformationOnly': ej.pdfviewer.StandardBusinessStampItem.InformationOnly,
        'NotApproved': ej.pdfviewer.StandardBusinessStampItem.NotApproved,
        'ForPublicRelease': ej.pdfviewer.StandardBusinessStampItem.ForPublicRelease,
        'PreliminaryResults': ej.pdfviewer.StandardBusinessStampItem.PreliminaryResults,
        'Void': ej.pdfviewer.StandardBusinessStampItem.Void
    };

    function findStampComments(type) {

        if (type == "Dynamic") {
            document.getElementById("stampClickedIStrue").style.display = "block";
            document.getElementById("dynamicstampListElement").style.display = "block";
            document.getElementById("signHerestampListElement").style.display = "none";
            document.getElementById("standardBussinessStampListElement").style.display = "none";
        }
        else if (type == "Sign Here") {
            document.getElementById("stampClickedIStrue").style.display = "block";
            document.getElementById("dynamicstampListElement").style.display = "none";
            document.getElementById("signHerestampListElement").style.display = "block";
            document.getElementById("standardBussinessStampListElement").style.display = "none";
        }
        else if (type == "Standard Business") {
            document.getElementById("stampClickedIStrue").style.display = "block";
            document.getElementById("dynamicstampListElement").style.display = "none";
            document.getElementById("signHerestampListElement").style.display = "none";
            document.getElementById("standardBussinessStampListElement").style.display = "block";
        }
        else {
            document.getElementById("dynamicstampListElement").style.display = "none";
            document.getElementById("signHerestampListElement").style.display = "none";
            document.getElementById("standardBussinessStampListElement").style.display = "none";
            document.getElementById("stampClickedIStrue").style.display = "none";
        }
    }

    function UpdateAnnotationPropertiesPanel(args) {
        selectedAnnotationId = args.annotationId;
        var index = -1;
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].annotationId === selectedAnnotationId) {
                index = i;
                break;
            }
        }

        // Ensure index is found, then update the properties to the panel
        if (index !== -1) {
            updatePropertiesToPanel(viewer.annotationCollection[index]);
        }
        viewControl();
    }

    updateAnnotationButtonObj.element.onclick = function () {
        var index = -1;
        var updatedAnnotation;
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].annotationId === selectedAnnotationId) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            updatedAnnotation = updateAnnotationSettings(viewer.annotationCollection[index]);
        }

        viewer.annotation.editAnnotation(updatedAnnotation);
        updateAnnotationButtonObj.disabled = true;
    };

    function updateAnnotationSettings(annotation) {
        var currentAnnotation = annotation;
        //Condition for updating position properties
        if (currentAnnotation.textMarkupAnnotationType === "Highlight" || currentAnnotation.textMarkupAnnotationType === "Underline" || currentAnnotation.textMarkupAnnotationType === "Strikethrough") {
            currentAnnotation.bounds = [];
            currentAnnotation.color = selectedAnnotation.fillColor ? (selectedAnnotation.fillColor.includes("rgba") ? rgbaStringToHex(selectedAnnotation.fillColor) : selectedAnnotation.fillColor) : "";
            if (selectedAnnotation.bounds.length <= 1) {
                currentAnnotation.bounds.push({
                    X: selectedAnnotation.x,
                    Y: selectedAnnotation.y,
                    Width: selectedAnnotation.width,
                    Height: selectedAnnotation.height,
                    Left: selectedAnnotation.x,
                    Top: selectedAnnotation.y
                });
            }
            else if (selectedAnnotation.bounds.length > 1) {
                for (var i = 0; i < selectedAnnotation.bounds.length; i++) {
                    currentAnnotation.bounds.push({
                        X: selectedAnnotation.bounds[i].X,
                        Y: selectedAnnotation.bounds[i].Y,
                        Width: selectedAnnotation.bounds[i].Width,
                        Height: selectedAnnotation.bounds[i].Height,
                        Left: selectedAnnotation.bounds[i].X,
                        Top: selectedAnnotation.bounds[i].Y
                    });
                }
            }
            else {
                currentAnnotation.bounds.X = selectedAnnotation.x;
                currentAnnotation.bounds.Y = selectedAnnotation.y;
                currentAnnotation.bounds.Width = selectedAnnotation.width;
                currentAnnotation.bounds.Height = selectedAnnotation.height;
                currentAnnotation.bounds.Left = selectedAnnotation.x;
                currentAnnotation.bounds.Top = selectedAnnotation.y;
            }
        }
        else if (currentAnnotation.shapeAnnotationType === "Ink" || currentAnnotation.shapeAnnotationType === "StickyNotes" || currentAnnotation.shapeAnnotationType === "Square" || currentAnnotation.shapeAnnotationType === "Circle" || currentAnnotation.shapeAnnotationType === "Radius" || currentAnnotation.shapeAnnotationType === "FreeText") {
            currentAnnotation.bounds.width = selectedAnnotation.width;
            currentAnnotation.bounds.height = selectedAnnotation.height;
            currentAnnotation.bounds.x = selectedAnnotation.x;
            currentAnnotation.bounds.y = selectedAnnotation.y;
        }
        else {
            currentAnnotation.bounds.width = selectedAnnotation.width;
            currentAnnotation.bounds.height = selectedAnnotation.height;
            currentAnnotation.bounds.left = selectedAnnotation.x;
            currentAnnotation.bounds.top = selectedAnnotation.y;
            currentAnnotation.bounds.x = selectedAnnotation.x;
            currentAnnotation.bounds.y = selectedAnnotation.y;
        }
        //Condition for updating other properties
        if (selectedAnnotation.annotationType === "Line" || selectedAnnotation.annotationType === "Arrow" || selectedAnnotation.annotationType === "Distance") {
            currentAnnotation.vertexPoints = [];
            currentAnnotation.vertexPoints[0] = { x: selectedAnnotation.vertexX0, y: selectedAnnotation.vertexY0 };
            currentAnnotation.vertexPoints[1] = { x: selectedAnnotation.vertexX1, y: selectedAnnotation.vertexY1 };
            currentAnnotation.lineHeadStart = selectedAnnotation.lineHeadStart;
            currentAnnotation.lineHeadEnd = selectedAnnotation.lineHeadEnd;
            currentAnnotation.lineHeadStartStyle = selectedAnnotation.lineHeadStart;
            currentAnnotation.lineHeadEndStyle = selectedAnnotation.lineHeadEnd;
            currentAnnotation.offset = { x: currentAnnotation.vertexPoints[0].x, y: currentAnnotation.vertexPoints[0].y };
            if (selectedAnnotation.annotationType === "Line") {
                currentAnnotation.subject = 'Line';
            }
            else if (selectedAnnotation.annotationType === 'Arrow') {
                currentAnnotation.subject = 'Arrow';
            }
            else {
                currentAnnotation.leaderLength = selectedAnnotation.leaderLength;
                currentAnnotation.subject = "LineDimension";
            }
        }
        else if (selectedAnnotation.annotationType === "FreeText") {
            currentAnnotation.textAlign = selectedAnnotation.alignment;
            if (selectedAnnotation.fontStyle === "Bold") {
                currentAnnotation.font.isBold = true;
                currentAnnotation.font.isStrikeout = false;
                currentAnnotation.font.isUnderline = false;
                currentAnnotation.font.isItalic = false;
            } else if (selectedAnnotation.fontStyle === "Italic") {
                currentAnnotation.font.isItalic = true;
                currentAnnotation.font.isStrikeout = false;
                currentAnnotation.font.isUnderline = false;
                currentAnnotation.font.isBold = false;
            } else if (selectedAnnotation.fontStyle === "Underline") {
                currentAnnotation.font.isUnderline = true;
                currentAnnotation.font.isStrikeout = false;
                currentAnnotation.font.isItalic = false;
                currentAnnotation.font.isBold = false;
            } else if (selectedAnnotation.fontStyle === "Strikethrough") {
                currentAnnotation.font.isStrikeout = true;
                currentAnnotation.font.isUnderline = false;
                currentAnnotation.font.isItalic = false;
                currentAnnotation.font.isBold = false;
            } else {
                currentAnnotation.font.isStrikeout = false;
                currentAnnotation.font.isUnderline = false;
                currentAnnotation.font.isItalic = false;
                currentAnnotation.font.isBold = false;
            }
            currentAnnotation.fontFamily = selectedAnnotation.fontFamily;
            currentAnnotation.fontSize = selectedAnnotation.fontSize;
            currentAnnotation.dynamicText = selectedAnnotation.defaultText;
            currentAnnotation.fontColor = selectedAnnotation.fontColor ? (selectedAnnotation.fontColor.includes("rgba") ? rgbaStringToHex(selectedAnnotation.fontColor) : selectedAnnotation.fontColor) : "";
        }
        //Condition for updating fill color and stroke color properties
        if (currentAnnotation.textMarkupAnnotationType === "Highlight" || currentAnnotation.textMarkupAnnotationType === "Underline" || currentAnnotation.textMarkupAnnotationType === "Strikethrough") {
            currentAnnotation.color = selectedAnnotation.fillColor ? (selectedAnnotation.fillColor.includes("rgba") ? rgbaStringToHex(selectedAnnotation.fillColor) : selectedAnnotation.fillColor) : "";
        }
        else {
            currentAnnotation.fillColor = selectedAnnotation.fillColor ? (selectedAnnotation.fillColor.includes("rgba") ? rgbaStringToHex(selectedAnnotation.fillColor) : selectedAnnotation.fillColor) : "";
            currentAnnotation.strokeColor = selectedAnnotation.strokeColor ? (selectedAnnotation.strokeColor.includes("rgba") ? rgbaStringToHex(selectedAnnotation.strokeColor) : selectedAnnotation.strokeColor) : "";
        }
        //Condition for updating print property
        if (selectedAnnotation.isPrint) {
            currentAnnotation.annotationSettings.isPrint = true;
            currentAnnotation.isPrint = true;
        }
        else {
            currentAnnotation.annotationSettings.isPrint = false;
            currentAnnotation.isPrint = false;
        }
        if (selectedAnnotation.annotationType === "Line") {
            currentAnnotation.subType = 'Line';
        }
        else if (selectedAnnotation.annotationType === "Arrow") {
            currentAnnotation.subType = 'Arrow';
        }
        else if (selectedAnnotation.annotationType === "Distance") {
            currentAnnotation.subType = "Distance";
        }
        //Condition for updating lock property
        if (selectedAnnotation.isLocked) {
            currentAnnotation.isLocked = true;
            currentAnnotation.annotationSettings.isLock = true;
            currentAnnotation.allowedInteractions = selectedAnnotation.allowedInteractions;
        }
        else {
            currentAnnotation.isLocked = false;
            currentAnnotation.annotationSettings.isLock = false;
        }
        //for updating thickness and opacity property
        currentAnnotation.thickness = selectedAnnotation.thickness;
        currentAnnotation.opacity = (parseInt(selectedAnnotation.opacity, 10)) / 100;
        updateAnnotationComments(currentAnnotation);
        // if (currentAnnotation.editComment) {
        //     currentAnnotation.comments = selectedAnnotation.replyComments;
        // }
        return currentAnnotation;
    }
    function isNullOrUndefined(obj) {
        return (obj === null) || (obj === undefined);
    }
    //for updating comments 
    function updateAnnotationComments(annotation) {
        var isReplyChanged = false;
        var currentAnnotation = annotation; // Declare currentAnnotation first

        // If currentAnnotation's note or notes differ from the selectedAnnotation's comment
        if (((!isNullOrUndefined(currentAnnotation.note) && (currentAnnotation.note !== selectedAnnotation.comment)) ||
            (!isNullOrUndefined(currentAnnotation.notes) && (currentAnnotation.notes !== selectedAnnotation.comment))) &&
            (currentAnnotation.comments && currentAnnotation.comments.length > 0)) {

            currentAnnotation.commentType = "edit"; // Mark it as an edit
        } else {
            currentAnnotation.commentType = "add"; // If no edit, treat it as an add
        }

        // Check if annotation type should handle comments (not for certain types like dimensions)
        var calibrationType = currentAnnotation.indent || ""; // Use "||" instead of optional chaining
        if (calibrationType !== "LineDimension" && calibrationType !== "PolyLineDimension" && calibrationType !== "PolygonDimension" &&
            calibrationType !== "PolygonRadius" && calibrationType !== "PolygonVolume") {

            // Safeguard against null or undefined notes
            if (!isNullOrUndefined(currentAnnotation.note) || ((currentAnnotation.shapeAnnotationType === "Ink" || currentAnnotation.shapeAnnotationType === "FreeText") && !currentAnnotation.note)) {
                currentAnnotation.note = selectedAnnotation.comment;
            } else if (!isNullOrUndefined(currentAnnotation.notes)) {
                currentAnnotation.notes = selectedAnnotation.comment;
            }
        }

        // Initialize the replyComment array
        currentAnnotation.replyComment = [];

        // Check if there are replyComments and process them
        if (!isNullOrUndefined(selectedAnnotation.replyComments) && selectedAnnotation.replyComments.length > 0) {
            if (selectedAnnotation.replyComments.length > currentAnnotation.comments.length) {
                var diff = selectedAnnotation.replyComments.length - currentAnnotation.comments.length;
                currentAnnotation.commentType = "add"; // Mark as "add" if replies are new
                for (var index = (selectedAnnotation.replyComments.length - diff); index < selectedAnnotation.replyComments.length; index++) {
                    currentAnnotation.replyComment.push(selectedAnnotation.replyComments[index].note);
                }
            } else if (selectedAnnotation.replyComments.length === currentAnnotation.comments.length) {
                // Compare individual reply comments
                for (var i = 0; i < selectedAnnotation.replyComments.length; i++) {
                    var value = selectedAnnotation.replyComments[i];
                    if (currentAnnotation.comments[i] && (value.note !== currentAnnotation.comments[i].note)) {
                        isReplyChanged = true;
                        currentAnnotation.commentType = 'edit';
                        currentAnnotation.commentId = currentAnnotation.comments[i].annotName;
                        currentAnnotation.editComment = value.note;
                    }
                }
            }
        }

        // If no reply was changed, reset the edit comment variables
        if (!isReplyChanged) {
            currentAnnotation.commentId = null;
            currentAnnotation.editComment = null;
        }
        return currentAnnotation;
    }

    //Function for updating reply comment
    function updateReply() {
        var currentReplyComment = new Comment();
        currentReplyComment.id = generateRandomId();
        currentReplyComment.author = selectedAnnotation.replyAuthor;
        currentReplyComment.note = selectedAnnotation.replyComment;
        currentReplyComment.modifiedDate = formatCurrentDate(new Date());
        currentReplyComment.state = selectedAnnotation.replyState;

        selectedAnnotation.replyComments.push(currentReplyComment);
        displayReplies();
        resetReplyCommentContainer();
    }

    addReplyButtonObj.element.onclick = function () {
        updateReply();
        if (selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    };

    //Function to generate unique for replyComment
    function generateRandomId() {
        return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);
    }

    var currentEditCommentId;
    //Creating context menu component for reply comment
    function initializeContextMenu(commentId) {
        var menuOptions = {
            target: '#contextmenutarget-' + commentId,
            items: selectedAnnotation.replyMenuItems,
            showItemOnClick: true,
            select: function (args) {
                if (args.item && args.item.text) {
                    switch (args.item.text) {
                        case 'Edit':
                            {
                                onReplyCommentEdit(currentEditCommentId);
                                break;
                            }
                        case 'Delete':
                            {
                                onReplyCommentDelete(currentEditCommentId);
                                break;
                            }
                    }
                }
                else {
                    console.error('Context menu item is undefined or has no text property');
                }
            }
        };

        var contextMenuElement = document.getElementById('contextmenu-' + commentId);
        if (contextMenuElement) {
            new ej.navigations.ContextMenu(menuOptions, contextMenuElement);
        } else {
            console.error('Context menu element #contextmenu-' + commentId + ' not found.');
        }
    }

    //function for displaying replies in repliesContainer
    function displayReplies() {
        var repliesContainer = document.getElementById('repliesContainer');
        document.getElementById('repliesList').style.display = "block";
        document.getElementById('repliesList').innerHTML = "Replies";

        if (selectedAnnotation.replyComments.length > 0) {
            repliesContainer.innerHTML = '';

            // Using traditional forEach with an anonymous function
            selectedAnnotation.replyComments.forEach(function (comment) {
                var replyContainer = document.createElement('div');
                replyContainer.className = 'reply-container';
                replyContainer.id = comment.id;
                replyContainer.innerHTML =
                    '<div class="reply-icon e-pv-comment-icon e-pv-icon"></div>' +
                    '<div class="reply-main-container">' +
                    '<div class="reply-text">' + comment.author + ' - ' + comment.modifiedDate + '</div>' +
                    '<div class="reply-text">' + comment.note + ' &nbsp; ' + (comment.state !== 'None' ? comment.state : '') + '</div>' +
                    '</div>' +
                    '<div class="more-container">' +
                    '<button type="button" class="e-control e-btn e-lib e-flat e-icon-btn context-menu-btn" ' +
                    'data-id="' + comment.id + '" id="contextmenutarget-' + comment.id + '" ' +
                    'style="padding: 5px 4px;">' +
                    '<span class="e-icons e-more-vertical-1 e-btn-icon"></span>' +
                    '</button>' +
                    '</div>';

                repliesContainer.appendChild(replyContainer);

                // Correctly select the button using its ID
                var contextMenuTarget = document.getElementById('contextmenutarget-' + comment.id);

                // Ensure that contextMenuTarget exists before binding the functions
                if (contextMenuTarget) {
                    // Bind getCommentID function to the onmousedown event
                    contextMenuTarget.onmousedown = function () {
                        getCommentID(comment.id);
                    };

                    // Bind openContextMenu function to the onclick event
                    contextMenuTarget.onclick = function (event) {
                        openContextMenu(event);
                    };
                }

                repliesContainer.style.display = "block";
            });
        }
    }

    function openContextMenu(event) {
        // Assuming contextMenu is an element in your DOM
        menuObj.open(event.clientY, event.clientX);
    }

    function getCommentID(commentId) {
        currentEditCommentId = commentId;
        console.log('Comment ID set to:', currentEditCommentId); // For debugging purposes
    }

    // Separate function to bind the event listener
    function bindContextMenuEventListener(button, commentId) {
        button.addEventListener('click', function () {
            getCommentID(commentId); // Use the correct comment.id
        });
    }

    function formatCurrentDate(date) {
        var options = {
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        return date.toLocaleString('en-US', options).replace(',', '');
    }

    function onReplyCommentEdit(commentId) {
        // Get the comment to edit
        selectedAnnotation.editReply = true;
        var comment;
        for (var i = 0; i < selectedAnnotation.replyComments.length; i++) {
            if (selectedAnnotation.replyComments[i].id === commentId) {
                comment = selectedAnnotation.replyComments[i];
            }
        }
        if (comment) {
            // Set the fields for editing
            selectedAnnotation.replyAuthor = comment.author;
            replyAuthorNameObj.value = comment.author;
            selectedAnnotation.replyComment = comment.note;
            replyCommentObj.value = comment.note;
            selectedAnnotation.replyState = comment.state;
            replyStatusObj.value = comment.state;
            currentEditCommentId = commentId;
            document.getElementById("updateReplyButton").style.display = "block";
            document.getElementById("addreplyButton").style.display = "none";
        }
    }

    //Function to delete reply comments
    function onReplyCommentDelete(commentId) {
        // Remove the comment from the array
        var commentIndex = selectedAnnotation.replyComments.findIndex(function (comment) {
            return comment.id === commentId;
        });
        if (commentIndex !== -1) {
            selectedAnnotation.replyComments.splice(commentIndex, 1);
            var index = -1;
            for (var i = 0; i < viewer.annotationCollection.length; i++) {
                if (viewer.annotationCollection[i].annotationId === selectedAnnotation.annotationId) {
                    index = i;
                }
            }
            if (index != -1) {
                viewer.annotationCollection[index].comments.splice(commentIndex, 1);
            }
        }
        if (selectedAnnotation.replyComments.length === 0) {
            selectedAnnotation.isReply = false;
        }
        // Remove the comment container from the DOM
        var replyContainer = document.getElementById(commentId);
        if (replyContainer) {
            replyContainer.remove();
        }
        // Update the displayed replies
        displayReplies();
        updateAnnotationButtonObj.disabled = false;
    }

    function viewControl() {
        if (selectedAnnotation.annotationSelected) {
            annotationListObj.enabled = false;
            pageNumberObj.enabled = false;
            inkAnnotationListObj.enabled = false;
            addAnnotationButtonObj.disabled = true;
            updateAnnotationButtonObj.disabled = true;
            if (annotationListObj.value === "Stamp") {
                document.getElementById("stampClickedIStrue").style.display = "none";
            }
            else if (selectedAnnotation.annotationType === "CustomStamp") {
                document.getElementById("fileUploaderIsTrue").style.display = "none";
            }
        }
        else {
            annotationListObj.enabled = true;
            pageNumberObj.enabled = true;
            inkAnnotationListObj.enabled = true;
            addAnnotationButtonObj.disabled = false;
            updateAnnotationButtonObj.disabled = true;
            if (annotationListObj.value === "Stamp") {
                document.getElementById("stampClickedIStrue").style.display = "block";
            }
            else if (selectedAnnotation.annotationType === "CustomStamp") {
                document.getElementById("fileUploaderIsTrue").style.display = "block";
            }
        }
    }

    //Function to reset reply comments container
    function resetReplyCommentContainer() {
        // Reset the reply fields
        selectedAnnotation.replyAuthor = 'Guest';
        replyAuthorNameObj.value = selectedAnnotation.replyAuthor;
        replyCommentObj.value = "";
        replyCommentObj.placeholder = "Reply Comment";
        selectedAnnotation.replyState = 'None';
        replyStatusObj.value = selectedAnnotation.replyState;
        document.getElementById("updateReplyButton").style.display = "none";
        document.getElementById("addreplyButton").style.display = "block";
    }

    function updateEditReply(currentEditCommentId) {
        if (currentEditCommentId && selectedAnnotation.editReply) {
            var currentReplyComment = selectedAnnotation.replyComments.find(function (comment) { return comment.id === currentEditCommentId; });
            if (currentReplyComment) {
                currentReplyComment.author = selectedAnnotation.replyAuthor;
                currentReplyComment.note = selectedAnnotation.replyComment;
                currentReplyComment.state = selectedAnnotation.replyState;
                currentReplyComment.modifiedDate = formatCurrentDate(new Date());
            }
            else {
                console.log('Comment ID : ' + currentEditCommentId + ' is not found');
            }
            currentEditCommentId = "";
        }
        selectedAnnotation.editReply = false;
        displayReplies();
        resetReplyCommentContainer();
    }

    updateReplyButtonObj.element.onclick = function () {
        updateEditReply(currentEditCommentId);
        if (selectedAnnotation.annotationSelected) {
            updateAnnotationButtonObj.disabled = false;
        }
    };

    function showBounds() {
        var tableBody = document.getElementById('pdfViewer-coordinate-table');
        if (tableBody) {
            indexValue += 1;
            // Get the current values from the input fields
            for (var i = 0; i < selectedAnnotation.bounds.length; i++) {
                var x = selectedAnnotation.bounds[i].X;
                var y = selectedAnnotation.bounds[i].Y;
                var width = selectedAnnotation.bounds[i].Width;
                var height = selectedAnnotation.bounds[i].Height;

                // Create a new table row
                var row = document.createElement('tr');

                // Create a cell for X and Y
                var cellX = document.createElement('td');
                var divelementX = document.createElement('div');
                divelementX.className = 'e-pv-table-items';

                var innerDivX = document.createElement('div');
                innerDivX.textContent = 'X' + indexValue + ' = ' + x;
                divelementX.appendChild(innerDivX);

                var innerDivY = document.createElement('div');
                innerDivY.textContent = 'Y' + indexValue + ' = ' + y;
                divelementX.appendChild(innerDivY);

                cellX.appendChild(divelementX);

                // Create a cell for width and height
                var cellY = document.createElement('td');
                var divelementY = document.createElement('div');
                divelementY.className = 'e-pv-table-items';

                var innerDivW = document.createElement('div');
                innerDivW.textContent = 'W' + indexValue + ' = ' + width;
                divelementY.appendChild(innerDivW);

                var innerDivH = document.createElement('div');
                innerDivH.textContent = 'H' + indexValue + ' = ' + height;
                divelementY.appendChild(innerDivH);

                cellY.appendChild(divelementY);

                // Append the cells to the row
                row.appendChild(cellX);
                row.appendChild(cellY);

                // Append the row to the table
                tableBody.appendChild(row);
            }

            // Show the table after adding the first row
            if (tableBody.style.display === 'none') {
                tableBody.style.display = 'table';
            }
        }
    }

    function showVertex() {
        clearTable();
        var tableBody = document.getElementById('pdfViewer-coordinate-table');
        if (tableBody) {
            for (var i = 0; i < selectedAnnotation.vertexPoints.length; i++) {
                indexValue += 1;

                // Get the current values from the input fields
                var x = selectedAnnotation.vertexPoints[i].x;
                var y = selectedAnnotation.vertexPoints[i].y;

                // Create a new table row
                var row = document.createElement('tr');

                // Create a cell for X and Y
                var cellX = document.createElement('td');
                var divelementX = document.createElement('div');
                divelementX.className = 'e-pv-table-items';

                var innerDivX = document.createElement('div');
                innerDivX.textContent = 'X' + indexValue + ' = ' + x;
                divelementX.appendChild(innerDivX);

                var innerDivY = document.createElement('div');
                innerDivY.textContent = 'Y' + indexValue + ' = ' + y;
                divelementX.appendChild(innerDivY);

                cellX.appendChild(divelementX);

                // Append the cells to the row
                row.appendChild(cellX);

                // Append the row to the table
                tableBody.appendChild(row);

                // Show the table after adding the first row
                if (tableBody.style.display === 'none') {
                    tableBody.style.display = 'table';
                }
            }
        }
    }
    function generateTable() {
        var container = document.getElementById("coordinate-table");
        container.innerHTML = "";
        var tableHTML = "";

        // Check annotation type (Polygon, Perimeter, etc.)
        if (selectedAnnotation.annotationType === "Polygon" ||
            selectedAnnotation.annotationType === "Perimeter" ||
            selectedAnnotation.annotationType === "Area" ||
            selectedAnnotation.annotationType === "Volume") {

            if (selectedAnnotation.vertexPoints.length > 0) {
                tableHTML += '<div>';
                tableHTML += '<table class="inner-table coordinate-table vertex">'; // Removed extra style for fixed layout

                // Loop through the VertexPoints and create rows with 2 columns
                for (var i = 0; i < selectedAnnotation.vertexPoints.length; i++) {
                    if (i % 2 === 0) {
                        // Start a new row every two points
                        tableHTML += '<tr>';
                    }

                    // Add the X and Y value of the current point in a single cell
                    var point = selectedAnnotation.vertexPoints[i];
                    tableHTML += '<td>X' + (i + 1) + ' = ' + parseInt(point.x, 10) + ' &ensp; Y' + (i + 1) + ' = ' + parseInt(point.y, 10) + '</td>';

                    // If it's the second point in the pair, add it to the second column of the same row
                    if (i + 1 < selectedAnnotation.vertexPoints.length) {
                        var point2 = selectedAnnotation.vertexPoints[i + 1];
                        tableHTML += '<td>X' + (i + 2) + ' = ' + parseInt(point2.x, 10) + ' &ensp; Y' + (i + 2) + ' = ' + parseInt(point2.y, 10) + '</td>';
                    }

                    // If two points were added, close the row
                    if (i + 1 < selectedAnnotation.vertexPoints.length) {
                        tableHTML += '</tr>';
                    }

                    // Skip the next point since it's already added
                    i++;
                }

                tableHTML += '</table>';
                tableHTML += '</div>';
            }
            if(selectedAnnotation.vertexPoints.length === 1) {
                deleteVertexButtonObj.disabled = true;
            }
            else {
                deleteVertexButtonObj.disabled = false;
            }
        } else {
            tableHTML += '<div>';
            tableHTML += '<table class="inner-table coordinate-table-bounds">';
            selectedAnnotation.bounds.forEach(function (bound, index) {
                tableHTML += '<tr>';
                tableHTML += '<td style="width:400px">X' + (index + 1) + ' = ' + parseInt(bound.X, 10) + ' &ensp; Y' + (index + 1) + ' = ' + parseInt(bound.Y, 10) + ' &ensp; W' + (index + 1) + ' = ' + parseInt(bound.Width, 10) + ' &ensp; H' + (index + 1) + ' = ' + parseInt(bound.Height, 10) + '</td>';
                tableHTML += '</tr>';
            });
            tableHTML += '</table>';
            tableHTML += '</div>';
            if(selectedAnnotation.bounds.length === 1) {
                deleteBoundsButtonObj.disabled = true;
            }
            else {
                deleteBoundsButtonObj.disabled = false;
            }
        }

        // Insert the generated table into the DOM
        container.innerHTML = tableHTML;
        container.style.display = "block";
    }
    //Method to reset replies on adding a new annotation
    function resetReplies() {
        selectedAnnotation.isReply = false;
        replyCheckBoxObj.checked = selectedAnnotation.isReply;
        selectedAnnotation.replyComments = [];
        document.getElementById('ischeckedReplybox').style.display = "none";
        document.getElementById('repliesList').style.display = "none";
        document.getElementById('repliesContainer').style.display = "none";
    }
};
